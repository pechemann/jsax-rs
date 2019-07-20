"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResourcePathUtil {
    applySegmentParams(state, parameters) {
        if (parameters) {
            const keys = Object.keys(parameters);
            let result = state.resource;
            keys.forEach((key) => {
                result = result.replace(`:${key}`, parameters[key]);
            });
            state.resource = result;
        }
    }
}
exports.ResourcePathUtil = ResourcePathUtil;
