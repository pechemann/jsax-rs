import { Galaad } from './core/Galaad';
import { TransitionConfig } from '../hateoas/config/TransitionConfig';

/**
 * Provide method/property decoration to declare a new application transition.
 * 
 * @param {TransitionConfig} config the config of the transition declared by this decorator.
 */
export function RsTransition(config: TransitionConfig) {
    return function (...args: any|string|TransitionConfig[]): any {
        args.push(config);
        switch (args.length) {
            case 3:
                return transitionPropertyDecorator.apply(this, args);
            case 4:
                if (typeof args[2] !== NUMBER_REF) {
                    return transitionMethodDecorator.apply(this, args);
                } else {
                    throw new Error();
                }
            default:
                throw new Error();
        }
    };

};

const NUMBER_REF: string = 'number';

function transitionMethodDecorator(target: any, methodName: string, descriptor: any, config: TransitionConfig): any {
    if (!config.stateRef) {
        config.stateRef = methodName;
    }
    if (!config.name) {
        config.name = methodName;
    }
    Galaad.getInstance().registerTransitionConfig(config);
    return descriptor;
}

function transitionPropertyDecorator(target: any, keyName: string, config: TransitionConfig): TransitionConfig {
    if (!config.name) {
        config.name = keyName;
    }
    Galaad.getInstance().registerTransitionConfig(config);
    return config;
}