/**
 * The <code>ApplicationConfig</code> interface represents the configuration of an <code>ApplicationContext</code>
 * object.
 */
export interface ApplicationConfig {
    
    /**
     * The reference name of the application.
     */
    name: string;

    /**
     * The domain of the application.
     */
    domain?: string;
}