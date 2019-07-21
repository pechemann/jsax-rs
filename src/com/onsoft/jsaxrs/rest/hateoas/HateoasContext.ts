import { ApplicationContext } from './ApplicationContext';
import { Application } from './Application';
import { State } from './State';

/**
 * The <code>HateoasContext</code> interface represents the context of an Hypermedia REST engine.
 */
export interface HateoasContext {

    /**
     * Return the context of the application managed by this Hypermedia REST engine.
     * 
     * @returns {ApplicationContext} the application managed by this Hypermedia REST engine.
     */
    getApplicationContext(): ApplicationContext;

    /**
     * Return the application state associated with the specified state name reference.
     * 
     * @param {string} stateName the name of the state for which to get the state.
     * @param {{ [name: string]: any }} parameters optional properties used to set values of the state resource path.
     * 
     * @returns {Application} the state associated with the specified state name reference.
     */
    getApplicationState(stateName: string): Application;

    /**
     * Return the representation application state associated with the specified state name reference. You typically
     * use representation application states as result of an HTTP call to expose hypermedia associaed with this state.
     * 
     * @param {string} stateName the name of the state for which to get the state.
     * @param {{ [name: string]: any }} parameters optional properties used to set values of the state resource path.
     * 
     * @returns {any} the representation state associated with the specified state name reference.
     */
    getApplicationStateRepresentation(stateName: string, parameters?: { [name: string]: any }): any

    /**
     * Return the complete structure of the application states managed by this Hypermedia REST engine.
     * 
     * @returns {Array<State>} the complete structure of the application states managed by this Hypermedia REST engine.
     */
    getGraph(): Array<State>;
}