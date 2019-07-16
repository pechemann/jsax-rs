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
     * Return the application domain.
     * 
     * @returns {string} the application domain.
     */
    getDomain(): string;
}