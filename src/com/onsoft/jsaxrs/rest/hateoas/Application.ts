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
     * The domain of the application.
     */
    domain?: string;
    
    /**
     * The current state of the application.
     */
    state: State;
}