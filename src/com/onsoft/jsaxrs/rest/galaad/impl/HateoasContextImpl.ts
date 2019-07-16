import { HateoasContext } from '../../hateoas/HateoasContext';
import { ApplicationContext } from '../../hateoas/ApplicationContext';
import { Application } from '../../hateoas/Application';

/**
 * The default implementation fo the <code>HateoasContext</code> interface.
 */
export class HateoasContextImpl implements HateoasContext {

    /**
     * The context of the application managed by this Hypermedia REST engine.
     */
    private readonly CONTEXT: ApplicationContext = null;

    /**
     * Create a new <code>HateoasContextImpl</code> instance.
     * 
     * @param {ApplicationConfig} context the application context for this <code>HateoasContext</code> object.
     */
    constructor(context: ApplicationContext) {
        this.CONTEXT = context;
    }

    /**
     * @inheritdoc
     */
    public getApplicationContext(): ApplicationContext {
        return this.CONTEXT;
    }
    
    /**
     * @inheritdoc
     */
    public getApplicationState(stateName: string): Application {
        return null;
    }
}