import { State } from './State';

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