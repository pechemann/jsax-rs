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
    ILLEGAL_TRANSITION_OPERATION = 'ILLEGAL_TRANSITION_OPERATION'
}