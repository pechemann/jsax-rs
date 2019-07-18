/**
 * The <code>StateType</code> enum defines all type of states that can be used to let an application to be managed by
 * Hypermedia.
 */
export enum StateType {
    
    /**
     * Indicates that the state represents a singular concept that is akin to an object instance or database record.
     */
    DOCUMENT = 'document',
    
    /**
     * Indicates that the state represents a server-managed directory of resources.
     */
    COLLECTION = 'collection',
    
    /**
     * Indicates that the state represents a controller.
     */
    CONTROLLER = 'controller',
    
    /**
     * Indicates that the state represents a client-managed resource repository.
     */
    STORE = 'store',
    
    /**
     * Indicates that the state represents an idempotent resource that does not specify mutators.
     */
    INVARIANT = 'invariant'
}