import { Application } from '../../hateoas/Application';
import { ApplicationImpl } from '../impl/ApplicationImpl';
import { State } from '../../hateoas/State';
import { ApplicationContext } from '../../hateoas/ApplicationContext';

/**
 * A basic builder for creating new <code>Application</code> objects, based on the Gallad default implementation.
 */
export class ApplicationBuilder {

    /**
     * Create and return a new <code>Application</code> object, built from the specified parameters.
     * 
     * @param {string} name the reference name of the application.
     * @param {string} authority the authority of the application.
     * @param {string} apiPath the path to the application API.
     * @param {string} version the version of the application API.
     * @param {State} state the current state of the application.
     * 
     * @returns {Application} a new <code>Application</code> object.
     */
    public build(name: string, authority: string, apiPath?: string, version?: string, state?: State): Application {
        const app: Application = new ApplicationImpl(name, authority, apiPath, version);
        if (state) {
            app.state = state;
        }
        return app;
    }
    
    /**
     * Create and return a new <code>Application</code> object, built from the specified context.
     * 
     * @param {ApplicationContext} context the context used to build the application.
     * @param {State} state the current state of the application.
     * 
     * @returns {Application} a new <code>Application</code> object.
     */
    public buildFromContext(context: ApplicationContext, state?: State): Application {
        const app: Application = new ApplicationImpl(
            context.getName(), context.getAuthority(), context.getApiPath(), context.getApiVersion()
        );
        if (state) {
            app.state = state;
        }
        return app;
    }
}