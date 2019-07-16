import { HateoasContext } from '../../hateoas/HateoasContext';
import { ApplicationConfig } from '../config/ApplicationConfig';
import { ApplicationContext } from '../../hateoas/ApplicationContext';
import { ApplicationContextImpl } from '../impl/ApplicationContextImpl';
import { HateoasContextImpl } from '../impl/HateoasContextImpl';

/**
 * The <code>Galaad</code> class is the entry point of the HATEOAS API defined by the JSAX-RS spec.
 */
export class Galaad {

    /**
     * The application context associated with this <code>Galaad</code> instance.
     */
    private _context: HateoasContext = null;

    /**
     * The static reference to this singleton.
     */
    private static _instance: Galaad = null;

    /**
     * Create a new <code>Galaad</code> instance.
     */
    private constructor() {}

    /**
     * Return the reference to this singleton.
     * 
     * @returns {Galaad} the reference to this singleton.
     */
    public static getInstance(): Galaad {
        return Galaad._instance || (Galaad._instance = new Galaad());
    }

    /**
     * Initialize the <code>Galaad</code> instance.
     * 
     * @param {ApplicationConfig} config the configuration of the application managed by this <code>Galaad</code>
     *                                   instance.
     */
    public init(config: ApplicationConfig): void {
        if (this._context) {

        } else {
            const appContext: ApplicationContext = new ApplicationContextImpl(config);
            this._context = new HateoasContextImpl(appContext);
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