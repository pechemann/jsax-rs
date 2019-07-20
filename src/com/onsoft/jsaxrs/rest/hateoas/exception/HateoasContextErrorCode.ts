/**
 * The <code>HateoasContextErrorCode</code> enum contains error codes associated with errors thrown by
 * <code>HateoasContext</code> objects at runtime.
 */
export enum HateoasContextErrorCode {

    /**
     * Indicates that an operation tries to override an existing context.
     */
    ILLEGAL_CONTEXT_OVERRIDE = 'ILLEGAL_CONTEXT_OVERRIDE',
    
    /**
     * Specifies an illegal state operation.
     */
    ILLEGAL_STATE_OPERATION = 'ILLEGAL_STATE_OPERATION',
    
    /**
     * Specifies an illegal transition operation.
     */
    ILLEGAL_TRANSITION_OPERATION = 'ILLEGAL_TRANSITION_OPERATION',
    
    /**
     * Specifies that the current state config is not valid.
     */
    INVALID_STATE_CONFIG = 'INVALID_STATE_CONFIG',
    
    /**
     * Specifies that the current transition config is not valid.
     */
    INVALID_TRANSITION_CONFIG = 'INVALID_TRANSITION_CONFIG',
    
    /**
     * Specifies that the current transition mapping is not valid.
     */
    INVALID_TRANSITION_MAPPING = 'INVALID_TRANSITION_MAPPING'
}