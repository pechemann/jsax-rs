/**
 * The <code>ApplicationContext</code> interface represents the context of an application managed by Hypermedia.
 */
export interface ApplicationContext {

    /**
     * Return the application name.
     * 
     * @returns {string} the application name.
     */
    getName(): string;

    /**
     * Return the application authority.
     * 
     * @returns {string} the application authority.
     */
    getAuthority(): string;

    /**
     * Return the path of the application API.
     * 
     * @returns {string} the path of the application API.
     */
    getApiPath(): string;
    
    /**
     * Return the version of the application API.
     * 
     * @returns {string} the version of the application API.
     */
    getApiVersion(): string;
}