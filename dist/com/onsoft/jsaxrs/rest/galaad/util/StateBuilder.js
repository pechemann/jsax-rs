"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StateImpl_1 = require("../impl/StateImpl");
const HttpMethod_1 = require("../../../lang/net/http/HttpMethod");
class StateBuilder {
    buildFromConfig(config, transitions) {
        const state = new StateImpl_1.StateImpl();
        state.name = config.name;
        state.type = config.type;
        state.resource = config.resource;
        state.method = config.method || HttpMethod_1.HttpMethod.GET;
        if (transitions) {
            state.transitions = transitions;
        }
        return state;
    }
}
exports.StateBuilder = StateBuilder;
