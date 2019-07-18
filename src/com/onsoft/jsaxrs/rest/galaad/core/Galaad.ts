import { HateoasContext } from '../../hateoas/HateoasContext';
import { ApplicationConfig } from '../../hateoas/config/ApplicationConfig';
import { ApplicationContext } from '../../hateoas/ApplicationContext';
import { ApplicationContextImpl } from '../impl/ApplicationContextImpl';
import { HateoasContextImpl } from '../impl/HateoasContextImpl';
import { State } from '../../hateoas/State';
import { StateConfig } from '../../hateoas/config/StateConfig';
import { StateBuilder } from '../util/StateBuilder';

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

        } else {
            const appContext: ApplicationContext = new ApplicationContextImpl(config);
            this._context = new HateoasContextImpl(appContext, this._initStates);
            this._initStates = null;
        }
    }

    /**
     * Declaare a state with the specified configuration.
     * 
     * @param {StateConfig} stateConfig the config of the state to declare.
     */
    public registerStateConfig(stateConfig: StateConfig): void {
        if (this._context) {

        } else {
            const state: State = this.STATE_BUILDER.buildFromConfig(stateConfig);
            this._initStates.push(state);
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