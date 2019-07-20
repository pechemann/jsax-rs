import { StateType } from '../StateType';
import { HttpMethod } from '../../../lang/net/http/HttpMethod';

/**
 * The <code>TransitionConfig</code> interface represents the configuration of a <code>Transition</code> object
 * declaration.
 */
export interface TransitionConfig {
    
    /**
     * The reference name for this transition declaration.
     */
    name?: string;

    /**
     * The type of this state transition.
     */
    type: StateType;

    /**
     * The resource associated with this transition declaration.
     */
    resource: string;

    /**
     * The HTTP methods associated with this transition declaration.
     */
    method?: HttpMethod;

    /**
     * The reference name to the state associated with this transition declaration.
     */
    stateRef?: string;
}