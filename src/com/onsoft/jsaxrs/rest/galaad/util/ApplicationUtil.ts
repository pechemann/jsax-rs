import { Application } from '../../hateoas/Application';
import { ApplicationContext } from '../../hateoas/ApplicationContext';

/**
 * A utility class for working with <code>Application</code> objects, based on the Gallad default implementation.
 */
export class ApplicationUtil {
    
    /**
     * Create and return a new Plain Old JavaScript Object (POJO) representation of the specified 
     * <code>Application</code> object.
     * 
     * @param {Application} state the application from which to build the new POJO representation.
     * 
     * @returns {any} a new POJO representation of the specified <code>Application</code> object.
     */
    public createAppRepresentation(application: Application): any {
        let result: any = {};
        result.name = application.name;
        result.state = application.state;
        if (application.authority) {
            result.authority = application.authority;
        }
        if (application.apiPath) {
            result.apiPath = application.apiPath;
        }
        if (application.version) {
            result.version = application.version;
        }
        return result;
    }
    
    /**
     * Create and return a new Plain Old JavaScript Object (POJO) representation of an application defined by the  
     * specified context.
     * 
     * @param {ApplicationContext} context the application context from which to build the new POJO representation.
     * 
     * @returns {any} a new POJO representation of the application defined by the specified context.
     */
    public createAppRepresentationFromContext(context: ApplicationContext): any {
        let result: any = {};
        let prop: string = context.getName();
        if (prop) {
            result.name = prop;
        }
        prop = context.getAuthority();
        if (prop) {
            result.authority = prop;
        }
        prop = context.getApiPath();
        if (prop) {
            result.apiPath = prop;
        }
        prop = context.getApiVersion();
        if (prop) {
            result.version = prop;
        }
        return result;
    }
}