import { State } from './State';
import { HttpProtocol } from '../../lang/net/http/HttpProtocol';

/**
 * The <code>Application</code> interface represents an application managed by Hypermedia.
 */
export interface Application {

    /**
     * The reference name of the application.
     */
    name: string;

    /**
     * The authority of the application.
     */
    authority?: string;

    /**
     * The protocol used to converse with the applicaton.
     */
    protocol?: HttpProtocol | any;

    /**
     * The path to the application API.
     */
    apiPath?: string;

    /**
     * The version of the application API.
     */
    version?: string;
    
    /**
     * The current state of the application.
     */
    state: State;
}