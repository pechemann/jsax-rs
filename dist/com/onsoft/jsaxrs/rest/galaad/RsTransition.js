"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Galaad_1 = require("./core/Galaad");
const HateoasContextError_1 = require("../hateoas/exception/HateoasContextError");
const HateoasContextErrorCode_1 = require("../hateoas/exception/HateoasContextErrorCode");
function RsTransition(config) {
    return function (...args) {
        args.push(config);
        switch (args.length) {
            case 3:
                return transitionPropertyDecorator.apply(this, args);
            case 4:
                if (typeof args[2] !== NUMBER_REF) {
                    return transitionMethodDecorator.apply(this, args);
                }
                else {
                    throw new HateoasContextError_1.HateoasContextError(HateoasContextErrorCode_1.HateoasContextErrorCode.INVALID_TRANSITION_CONFIG, '@RsTransition can only be applied to methods and properties.');
                }
            default:
                throw new HateoasContextError_1.HateoasContextError(HateoasContextErrorCode_1.HateoasContextErrorCode.INVALID_TRANSITION_CONFIG, '@RsTransition can only be applied to methods and properties.');
        }
    };
}
exports.RsTransition = RsTransition;
;
const NUMBER_REF = 'number';
function transitionMethodDecorator(target, methodName, descriptor, config) {
    if (!config.stateRef) {
        config.stateRef = methodName;
    }
    if (!config.name) {
        config.name = methodName;
    }
    Galaad_1.Galaad.getInstance().registerTransitionConfig(config);
    return descriptor;
}
function transitionPropertyDecorator(target, keyName, config) {
    if (!config.name) {
        config.name = keyName;
    }
    Galaad_1.Galaad.getInstance().registerTransitionConfig(config);
    return config;
}
