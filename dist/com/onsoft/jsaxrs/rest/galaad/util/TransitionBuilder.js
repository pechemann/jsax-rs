"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpMethod_1 = require("../../../lang/net/http/HttpMethod");
const StateType_1 = require("../../hateoas/StateType");
const HateoasContextError_1 = require("../../hateoas/exception/HateoasContextError");
const HateoasContextErrorCode_1 = require("../../hateoas/exception/HateoasContextErrorCode");
const TransitionImpl_1 = require("../impl/TransitionImpl");
class TransitionBuilder {
    buildFromConfig(config) {
        const method = config.method;
        const type = config.type;
        const transition = new TransitionImpl_1.TransitionImpl();
        transition.type = type;
        transition.resource = config.resource;
        transition.rel = config.rel;
        if (method) {
            if (type === StateType_1.StateType.CONTROLLER && method !== HttpMethod_1.HttpMethod.POST) {
                throw new HateoasContextError_1.HateoasContextError(HateoasContextErrorCode_1.HateoasContextErrorCode.INVALID_TRANSITION_CONFIG, 'CONTROLLER reources must be called with HTTP POST methods.');
            }
            else {
                transition.method = method;
            }
        }
        return transition;
    }
    buildFromState(state) {
        const transition = new TransitionImpl_1.TransitionImpl();
        transition.type = state.type;
        transition.resource = state.resource;
        transition.method = state.method;
        return transition;
    }
}
exports.TransitionBuilder = TransitionBuilder;
