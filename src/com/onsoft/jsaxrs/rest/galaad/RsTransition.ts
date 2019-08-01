import { Galaad } from './core/Galaad';
import { TransitionConfig } from '../hateoas/config/TransitionConfig';
import { HateoasContextError } from '../hateoas/exception/HateoasContextError';
import { HateoasContextErrorCode } from '../hateoas/exception/HateoasContextErrorCode';

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
                    throw new HateoasContextError(
                        HateoasContextErrorCode.INVALID_TRANSITION_CONFIG,
                        `@RsTransition can only be applied to methods and properties`
                    );
                }
            default:
                throw new HateoasContextError(
                    HateoasContextErrorCode.INVALID_TRANSITION_CONFIG,
                    `@RsTransition can only be applied to methods and properties`
                );
        }
    };

};

/* private */
const NUMBER_REF: string = 'number';

/* private */
function transitionMethodDecorator(target: any, methodName: string, descriptor: PropertyDescriptor,
                                   config: TransitionConfig): PropertyDescriptor {
    if (!config.stateRef) {
        config.stateRef = methodName;
    }
    if (!config.name) {
        config.name = methodName;
    }
    Galaad.getInstance().registerTransitionConfig(config);
    return descriptor;
}

/* private */
function transitionPropertyDecorator(target: any, keyName: string, config: TransitionConfig): TransitionConfig {
    if (!config.name) {
        config.name = keyName;
    }
    Galaad.getInstance().registerTransitionConfig(config);
    return config;
}