import { HateoasContext } from '../../hateoas/HateoasContext';
import { ApplicationConfig } from '../../hateoas/config/ApplicationConfig';
import { ApplicationContext } from '../../hateoas/ApplicationContext';
import { ApplicationContextImpl } from '../impl/ApplicationContextImpl';
import { HateoasContextImpl } from '../impl/HateoasContextImpl';
import { State } from '../../hateoas/State';
import { StateConfig } from '../../hateoas/config/StateConfig';
import { StateBuilder } from '../util/StateBuilder';
import { TransitionConfig } from '../../hateoas/config/TransitionConfig';
import { HateoasContextError } from '../../hateoas/exception/HateoasContextError';
import { HateoasContextErrorCode } from '../../hateoas/exception/HateoasContextErrorCode';
import { Transition } from '../../hateoas/Transition';
import { TransitionBuilder } from '../util/TransitionBuilder';
import { TransitionMapping } from '../util/TransitionMapping';

/**
 * The <code>Galaad</code> class is the entry point of the HATEOAS API defined by the JSAX-RS spec.
 */
export class Galaad {

    /**
     * The builder used by this <code>Galaad</code> instance to create states.
     */
    private _stateBuilder: StateBuilder = null;

    /**
     * The builder used by this <code>Galaad</code> instance to create transitions.
     */
    private _transitionBuilder: TransitionBuilder = null;

    /**
     * The application context associated with this <code>Galaad</code> instance.
     */
    private _context: HateoasContext = null;

    /**
     * The list of states registered into this <code>Galaad</code> instance before context initialization.
     */
    private _initStates: Array<State> = null;

    /**
     * The list of states registered into this <code>Galaad</code> instance before context initialization.
     */
    private _initTransitionMap: Array<TransitionMapping> = null;

    /**
     * The map of states registered into this  <code>Galaad</code> instance before context initialization.
     */
    private _initTransitions: Map<string, Transition> = null;

    /**
     * The static reference to this singleton.
     */
    private static _instance: Galaad = null;

    /**
     * Create a new <code>Galaad</code> instance.
     */
    private constructor() {
        this._initStates = new Array<State>();
        this._initTransitions = new Map<string, Transition>();
        this._initTransitionMap = new Array<TransitionMapping>();
        this._stateBuilder = new StateBuilder();
        this._transitionBuilder = new TransitionBuilder();
    }

    /**
     * Return the reference to this singleton.
     * 
     * @returns {Galaad} the reference to this singleton.
     */
    public static getInstance(): Galaad {
        return Galaad._instance || (Galaad._instance = new Galaad());
    }

    /**
     * Initialize the <code>HateoasContext</code> for this <code>Galaad</code> instance.
     * 
     * @param {ApplicationConfig} config the configuration of the application managed by this <code>Galaad</code>
     *                                   instance.
     */
    public createContext(config: ApplicationConfig): void {
        if (this._context) {
            throw new HateoasContextError(
                HateoasContextErrorCode.ILLEGAL_CONTEXT_OVERRIDE,
                'A context already exists for this application.'
            );
        } else {
            const appContext: ApplicationContext = new ApplicationContextImpl(config);
            this.setStatesTransitions();
            this._context = new HateoasContextImpl(appContext, this._initStates);
            this._initStates = null;
            this._initTransitionMap = null;
            this._initTransitions.clear();
            this._initTransitions = null;
            this._stateBuilder = null;
            this._transitionBuilder = null;
        }
    }

    /**
     * Declare a state with the specified configuration.
     * 
     * @param {StateConfig} config the config of the state to declare.
     */
    public registerStateConfig(config: StateConfig): void {
        if (this._context) {
            throw new HateoasContextError(
                HateoasContextErrorCode.ILLEGAL_STATE_OPERATION,
                'You cannot add state config after application context initialization.'
            );
        } else {
            const state: State = this._stateBuilder.buildFromConfig(config);
            this._initStates.push(state);
        }
    }

    /**
     * Declare a transition with the specified configuration.
     * 
     * @param {TransitionConfig} config the config of the transition to declare.
     */
    public registerTransitionConfig(config: TransitionConfig): void {
        if (this._context) {
            throw new HateoasContextError(
                HateoasContextErrorCode.ILLEGAL_TRANSITION_OPERATION,
                'You cannot add transition config after application context initialization.'
            );
        } else {
            const transition: Transition = this._transitionBuilder.buildFromConfig(config);
            const transitionRef: string = config.name;
            const stateRef: string = config.stateRef;
            if (stateRef) {
                this.addTransitionMappper({ stateRef: stateRef, transitionRef: transitionRef });
            }
            this._initTransitions.set(transitionRef, transition);
        }
    }

    /**
     * Declare a mapping between a transition and a state.
     * 
     * @param {TransitionMapping} mapper a mapping between a transition and a state.
     */
    public addTransitionMappper(mapper: TransitionMapping): void {
        if (this._context) {
            throw new HateoasContextError(
                HateoasContextErrorCode.ILLEGAL_TRANSITION_OPERATION,
                'You cannot map transitions after application context initialization.'
            );
        } else {
            this._initTransitionMap.push(mapper);
        }
    }
    
    /**
     * Return the application context associated with this <code>Galaad</code> instance.
     * 
     * @returns {HateoasContext} the application context associated with this <code>Galaad</code> instance.
     */
    public getContext(): HateoasContext {
        return this._context;
    }
    
    /**
     * Associate states and transitions.
     */
    private setStatesTransitions(): void {
        this._initStates.forEach((state: State)=> this.assignTransitionsToState(state));
    }

    /**
     * Set all transitions of the specified state.
     * 
     * @param {State} state the state for which to set all transitions.
     */
    private assignTransitionsToState(state: State): void {
        const stateRef: string = state.name;
        const mappingList: Array<TransitionMapping> = this._initTransitionMap.filter((mapping: TransitionMapping)=> {
            return mapping.stateRef === stateRef;
        });
        if (mappingList.length > 0) {
            const transitions: Array<Transition> = new Array<Transition>();
            mappingList.forEach((mapping: TransitionMapping)=> {
                const transitionRef: string = mapping.transitionRef;
                if (this._initTransitions.has(transitionRef)) {
                    transitions.push(this._initTransitions.get(mapping.transitionRef));
                } else {
                    throw new HateoasContextError(
                        HateoasContextErrorCode.INVALID_TRANSITION_MAPPING,
                     `Transition does no exists for the specified state: state=${stateRef}, transition=${transitionRef}`
                    );
                }
            });
            state.transitions = transitions;
        }
    }
}