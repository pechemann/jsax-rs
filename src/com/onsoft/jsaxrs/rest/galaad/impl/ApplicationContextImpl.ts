import { ApplicationContext } from '../../hateoas/ApplicationContext';
import { ApplicationConfig } from '../../hateoas/config/ApplicationConfig';

/**
 * The default implementation fo the <code>ApplicationContext</code> interface.
 */
export class ApplicationContextImpl implements ApplicationContext {

    /**
     * The application name.
     */
    private readonly NAME: string = null;

    /**
     * The application domain.
     */
    private readonly DOMAIN: string = null;

    /**
     * The path of the application API.
     */
    private readonly API_PATH: string = null;
    
    /**
      * The version of the application API.
     */
    private readonly VERSION: string = null;

    /**
     * Create a new <code>ApplicationContextImpl</code> instance.
     * 
     * @param {ApplicationConfig} config the configuration of the application represented by this 
     *                                   <code>ApplicationContext</code> object.
     */
    constructor(config: ApplicationConfig) {
        this.NAME = config.name;
        this.DOMAIN = config.domain;
        this.API_PATH = config.apiPath;
        this.VERSION = config.version;
    }

    /**
     * @inheritdoc
     */
    public getName(): string {
        return this.NAME;
    }

    /**
     * @inheritdoc
     */
    public getDomain(): string {
        return this.DOMAIN;
    }

    /**
     * @inheritdoc
     */
    public getApiPath(): string {
        return this.API_PATH;
    }
    
    /**
     * @inheritdoc
     */
    public getApiVersion(): string {
        return this.VERSION;
    }
}