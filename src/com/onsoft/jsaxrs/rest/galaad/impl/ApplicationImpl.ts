import { State } from '../../hateoas/State';
import { Application } from '../../hateoas/Application';
import { HttpProtocol } from '../../../lang/net/http/HttpProtocol';

/**
 * The default implementation fo the <code>Application</code> interface.
 */
export class ApplicationImpl implements Application {

    /**
     * @inheritdoc
     */
    public state: State = null;
    
    /**
     * @inheritdoc
     */
    public readonly name: string = null;

    /**
     * @inheritdoc
     */
    public readonly authority?: string = null;

    /**
     * @inheritdoc
     */
    public readonly protocol: HttpProtocol | any = null;

    /**
     * @inheritdoc
     */
    public readonly apiPath?: string = null;
    
    /**
     * @inheritdoc
     */
    public readonly version?: string = null;

    /**
     * Create a new <code>ApplicationImpl</code> instance.
     * 
     * @param {string} name the reference name of the application.
     * @param {string} authority the authority of the application.
     * @param {string} apiPath the path to the application API.
     * @param {string} version the version of the application API.
     * @param {HttpProtocol | any} protocol the protocol used to converse with the applicaton.
     */
    constructor(name: string, authority: string, apiPath: string, version: string, protocol: HttpProtocol|any = null) {
        this.name = name;
        this.authority = authority;
        this.apiPath = apiPath;
        this.version = version;
        this.protocol = protocol;
    }
}