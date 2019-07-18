import { State } from '../../hateoas/State';
import { Application } from '../../hateoas/Application';

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
    public readonly domain?: string = null;

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
     * @param {string} domain the domain of the application.
     * @param {string} apiPath the path to the application API.
     * @param {string} version the version of the application API.
     */
    constructor(name: string, domain: string, apiPath: string, version: string) {
        this.name = name;
        this.domain = domain;
        this.apiPath = apiPath;
        this.version = version;
    }
}