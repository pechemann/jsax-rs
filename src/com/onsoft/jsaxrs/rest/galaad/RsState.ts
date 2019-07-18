import { Galaad } from './core/Galaad';
import { StateConfig } from '../hateoas/config/StateConfig';

/**
 * Provide method decoration to declare a new application state.
 * 
 * @param {StateConfig} stateConfig the config of the state declared by this decorator.
 */
export function RsState(stateConfig: StateConfig) {
    return function(target: any, methodName: string, descriptor: any): any {
        if (!stateConfig.name) {
            stateConfig.name = methodName;
        }
        Galaad.getInstance().registerStateConfig(stateConfig);
        return descriptor;
    };
};