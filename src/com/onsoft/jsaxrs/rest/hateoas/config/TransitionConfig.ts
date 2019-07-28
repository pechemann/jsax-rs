import { StateType } from '../StateType';
import { HttpMethod } from '../../../lang/net/http/HttpMethod';
import { LinkType } from '../LinkType';

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
    
    /**
     * The link type for this transition declaration.
     * 
     * @see https://www.w3.org/TR/html50/links.html#linkTypes
     */
    rel?: LinkType;
}