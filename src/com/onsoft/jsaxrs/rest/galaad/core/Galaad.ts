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
    private _initTransitionList: Array<TransitionMapping> = null;

    /**
     * The list of transitions to be created from states registered into this <code>Galaad</code> instance before
     * context initialization.
     */
    private _createTransitionList: Array<TransitionMapping> = null;

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
        this._initTransitionList = new Array<TransitionMapping>();
        this._createTransitionList = new Array<TransitionMapping>();
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
            this._initTransitionList.length = 0;
            this._initTransitionList = null;
            this._initTransitions.clear();
            this._initTransitions = null;
            this._stateBuilder = null;
            this._transitionBuilder = null;
            this._createTransitionList.length = 0;
            this._createTransitionList = null;
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
            this._initTransitionList.push(mapper);
        }
    }
    
    /**
     * Declare the predicate for creating a new transition based upon an existing state.
     * 
     * @param {TransitionMapping} mapper the logical link between the new transition and the associated state.
     */
    public declareTransitionFromState(mapper: TransitionMapping): void {
        if (this._context) {
            throw new HateoasContextError(
                HateoasContextErrorCode.ILLEGAL_TRANSITION_OPERATION,
                'You cannot create transition from state after application context initialization.'
            );
        } else {
            this._createTransitionList.push(mapper);
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
        this.createTransitionsFromStates();
        this._initStates.forEach((state: State)=> this.assignTransitionsToState(state));
    }

    /**
     * Set all transitions of the specified state.
     * 
     * @param {State} state the state for which to set all transitions.
     */
    private assignTransitionsToState(state: State): void {
        const stateRef: string = state.name;
        const mappingList: Array<TransitionMapping> = this._initTransitionList.filter((mapping: TransitionMapping)=> {
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
                    `Transition does no exists for the specified state: state=${stateRef}, transition=${transitionRef}.`
                    );
                }
            });
            state.transitions = transitions;
        }
    }

    /**
     * Create all transitions based from existing states.
     */
    private createTransitionsFromStates(): void {
        this._createTransitionList.forEach((mapping: TransitionMapping)=> this.createTransitionFromState(mapping));
    }
    
    /**
     * Create a new transition, based from existing states, depending on the specified mapping.
     * 
     * @param {TransitionMapping} mapping the state / transition mapping sued to create the new transition.
     */
    private createTransitionFromState(mapping: TransitionMapping): void {
        const stateRef: string = mapping.stateRef;
        const transitionRef: string = mapping.transitionRef;
        const state: State = this._initStates.find((state: State)=> state.name === stateRef);
        if (state) {
            const transition: Transition = this._transitionBuilder.buildFromState(state);
            transition.rel = mapping.rel;
            this._initTransitions.set(transitionRef, transition);
        } else {
            throw new HateoasContextError(
                HateoasContextErrorCode.INVALID_TRANSITION_MAPPING,
              `State does no exists to create the specified transition: state=${stateRef}, transition=${transitionRef}.`
            );
        }
    }
}