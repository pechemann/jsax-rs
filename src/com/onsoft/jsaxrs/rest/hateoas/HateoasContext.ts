import { ApplicationContext } from './ApplicationContext';
import { Application } from './Application';

/**
 * The <code>HateoasContext</code> interface represents the context of an Hypermedia REST engine.
 */
export interface HateoasContext {

    /**
     * Returns the context of the application managed by this Hypermedia REST engine.
     * 
     * @returns {ApplicationContext} the application managed by this Hypermedia REST engine.
     */
    getApplicationContext(): ApplicationContext;

    /**
     * Returns the application state associated with the specified state name reference.
     * 
     * @param {string} stateName the name of the state for which to get the state.
     * 
     * @returns {Application} the state associated with the specified state name reference.
     */
    getApplicationState(stateName: string): Application;
}