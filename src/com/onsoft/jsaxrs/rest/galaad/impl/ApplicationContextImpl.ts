import { ApplicationContext } from '../../hateoas/ApplicationContext';
import { ApplicationConfig } from '../config/ApplicationConfig';

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
     * Create a new <code>ApplicationContextImpl</code> instance.
     * 
     * @param {ApplicationConfig} config the configuration of the application represented by this 
     *                                   <code>ApplicationContext</code> object.
     */
    constructor(config: ApplicationConfig) {
        this.NAME = config.name;
        this.DOMAIN = config.domain;
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
}