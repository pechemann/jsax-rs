import { HttpMethod } from '../../lang/net/http/HttpMethod';
import { StateType } from './StateType';
import { Transition } from './Transition';

/**
 * The <code>State</code> interface represents a state of an application managed by Hypermedia.
 */
export interface State {

    /**
     * The reference name for this state.
     */
    name?: string;

    /**
     * The type of this state.
     */
    type: StateType;

    /**
     * The resource associated with this state.
     */
    resource: string;

    /**
     * The request method associated with this state.
     */
    method: HttpMethod | any;

    /**
     * The list of transitions associated with this state.
     */
    transitions?: Array<Transition>;
    
    /**
     * The context that describes this state.
     */
    context?: any;
}