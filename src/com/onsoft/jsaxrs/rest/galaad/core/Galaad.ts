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

/**
 * The <code>Galaad</code> class is the entry point of the HATEOAS API defined by the JSAX-RS spec.
 */
export class Galaad {

    /**
     * The builder used by this <code>Galaad</code> instance to create states.
     */
    private readonly STATE_BUILDER: StateBuilder = null;

    /**
     * The application context associated with this <code>Galaad</code> instance.
     */
    private _context: HateoasContext = null;

    /**
     * The list of states registered into this  <code>Galaad</code> instance before context initialization.
     */
    private _initStates: Array<State> = null;

    /**
     * The static reference to this singleton.
     */
    private static _instance: Galaad = null;

    /**
     * Create a new <code>Galaad</code> instance.
     */
    private constructor() {
        this._initStates = Array<State>();
        this.STATE_BUILDER = new StateBuilder();
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
            this._context = new HateoasContextImpl(appContext, this._initStates);
            this._initStates = null;
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
                'You cannot add state config after this application context initialization.'
            );
        } else {
            const state: State = this.STATE_BUILDER.buildFromConfig(config);
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
                'You cannot add transition config after this application context initialization.'
            );
        } else {
            console.log(config)
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
}