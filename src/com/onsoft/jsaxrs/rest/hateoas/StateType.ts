/**
 * The <code>StateType</code> enum defines all type of states that can be used to let an application to be managed by
 * Hypermedia.
 */
export enum StateType {
    
    /**
     * Indicates that the state represents an idempotent resource which has no has no modification parameters.
     */
    INVARIANT = 'invariant',
    
    /**
     * Indicates that the state represents a collection.
     */
    COLLECTION = 'collection',
    
    /**
     * Indicates that the state represents a controller.
     */
    CONTROLLER = 'controller'
}