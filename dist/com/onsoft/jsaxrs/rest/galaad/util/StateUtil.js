"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StateUtil {
    createStateRepresentation(state) {
        let result = {};
        result.type = state.type;
        result.resource = state.resource;
        if (state.method) {
            result.method = state.method;
        }
        if (state.transitions) {
            const transitionRepresentations = new Array();
            state.transitions.forEach((transition) => {
                transitionRepresentations.push(this.createTransitionRepresentation(transition));
            });
            result.transitions = transitionRepresentations;
        }
        return result;
    }
    createTransitionRepresentation(transition) {
        let result = {};
        result.type = transition.type;
        result.resource = transition.resource;
        if (transition.method) {
            result.method = transition.method;
        }
        if (transition.rel) {
            result.rel = transition.rel;
        }
        return result;
    }
}
exports.StateUtil = StateUtil;
