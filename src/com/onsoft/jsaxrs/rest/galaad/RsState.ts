import { Galaad } from './core/Galaad';
import { StateConfig } from '../hateoas/config/StateConfig';

/**
 * Provide method decoration to declare a new application state.
 * 
 * @param {StateConfig} config the config of the state declared by this decorator.
 */
export function RsState(config: StateConfig) {
    return function(target: any, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        if (!config.name) {
            config.name = methodName;
        }
        Galaad.getInstance().registerStateConfig(config);
        return descriptor;
    };
};