import { Galaad } from './core/Galaad';
import { ApplicationConfig } from '../hateoas/config/ApplicationConfig';

/**
 * Provide class decoration to declare a new application state.
 * 
 * @param {ApplicationConfig} config the application declared by this decorator.
 */
export function RsApplication(config: ApplicationConfig) {
    Galaad.getInstance().createContext(config);
    return function(constructorFunction: Function): any {
        return constructorFunction;
    };
};