import { StateType } from '../StateType';
import { HttpMethod } from '../../../lang/net/http/HttpMethod';

/**
 * The <code>StateConfig</code> interface represents the configuration of a <code>State</code> object declaration.
 */
export interface StateConfig {
    
    /**
     * The reference name for this state declaration.
     */
    name?: string;

    /**
     * The type of this state declaration.
     */
    type: StateType;

    /**
     * The resource associated with this state declaration.
     */
    resource: string;

    /**
     * The HTTP methods associated with this state declaration.
     */
    method?: HttpMethod;
}