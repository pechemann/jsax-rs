import { State } from './State';

/**
 * The <code>Application</code> interface represents an application managed by Hypermedia.
 */
export interface Application {

    /**
     * The current state list of the application.
     */
    state: Array<State>;
}