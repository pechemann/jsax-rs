import { HateoasContextErrorCode } from './HateoasContextErrorCode';

/**
 * The <code>HateoasContextError</code> class represents errors thrown by <code>HateoasContext</code> objects at
 * runtime.
 */
export class HateoasContextError extends Error {

    /**
     * The error code associated with this exception.
     */
    public readonly code: HateoasContextErrorCode = null;

    /**
     * Create a new <code>HateoasContextError</code> instance.
     * 
     * @param {HateoasContextErrorCode} code the error code associated with this exception.
     * @param {string} message the error message associated with this exception.
     */
    constructor(code: HateoasContextErrorCode, message: string) {
        super(message);
        this.code = code;
    }
}