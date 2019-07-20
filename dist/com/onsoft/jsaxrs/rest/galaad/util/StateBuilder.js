"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StateImpl_1 = require("../impl/StateImpl");
const HttpMethod_1 = require("../../../lang/net/http/HttpMethod");
const StateType_1 = require("../../hateoas/StateType");
const HateoasContextError_1 = require("../../hateoas/exception/HateoasContextError");
const HateoasContextErrorCode_1 = require("../../hateoas/exception/HateoasContextErrorCode");
class StateBuilder {
    buildFromConfig(config, transitions) {
        const method = config.method;
        const type = config.type;
        const state = new StateImpl_1.StateImpl();
        state.name = config.name;
        state.type = type;
        state.resource = config.resource;
        if (method) {
            if (type === StateType_1.StateType.CONTROLLER && method !== HttpMethod_1.HttpMethod.POST) {
                throw new HateoasContextError_1.HateoasContextError(HateoasContextErrorCode_1.HateoasContextErrorCode.INVALID_STATE_CONFIG, 'CONTROLLER reources must be called with HTTP POST methods.');
            }
            else {
                state.method = method;
            }
        }
        else {
            if (type === StateType_1.StateType.CONTROLLER) {
                state.method = HttpMethod_1.HttpMethod.POST;
            }
            else {
                state.method = HttpMethod_1.HttpMethod.GET;
            }
        }
        if (transitions) {
            state.transitions = transitions;
        }
        return state;
    }
}
exports.StateBuilder = StateBuilder;
