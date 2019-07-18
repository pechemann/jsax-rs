/**
 * The <code>ApplicationConfig</code> interface represents the configuration of an <code>ApplicationContext</code>
 * object declaration.
 */
export interface ApplicationConfig {
    
    /**
     * The reference name of the application declaration.
     */
    name: string;

    /**
     * The domain of the application declaration.
     */
    domain?: string;
    
    /**
     * The path to the application API.
     */
    apiPath?: string;

    /**
     * The version of the application API.
     */
    version?: string;
}