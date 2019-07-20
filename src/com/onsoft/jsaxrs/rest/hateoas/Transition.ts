import { HttpMethod } from '../../lang/net/http/HttpMethod';
import { StateType } from './StateType';

/**
 * The <code>Transition</code> interface represents a transition of an application managed by Hypermedia.
 */
export interface Transition {

    /**
     * The type of the state associated with this transition.
     */
    type: StateType;

    /**
     * The resource associated with this transition.
     */
    resource: string;

    /**
     * The HTTP methods associated with this transition.
     */
    method: HttpMethod;

    /**
     * The context that describes the state associated with this transition.
     */
    context?: any;
}