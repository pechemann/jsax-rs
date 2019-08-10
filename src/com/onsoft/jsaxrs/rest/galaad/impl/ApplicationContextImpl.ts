import { ApplicationContext } from '../../hateoas/ApplicationContext';
import { ApplicationConfig } from '../../hateoas/config/ApplicationConfig';
import { HttpProtocol } from '../../../lang/net/http/HttpProtocol';

/**
 * The default implementation fo the <code>ApplicationContext</code> interface.
 */
export class ApplicationContextImpl implements ApplicationContext {

    /**
     * The application name.
     */
    private readonly NAME: string = null;

    /**
     * The application authority.
     */
    private readonly AUTHORITY: string = null;

    /**
     * The application protocol.
     */
    private readonly PROTOCOL: HttpProtocol | any = null;

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
        this.AUTHORITY = config.authority;
        this.API_PATH = config.apiPath;
        this.VERSION = config.version;
        this.PROTOCOL = config.protocol;
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
    public getAuthority(): string {
        return this.AUTHORITY;
    }

    /**
     * @inheritdoc
     */
    public getProtocol(): HttpProtocol | any {
        return this.PROTOCOL;
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