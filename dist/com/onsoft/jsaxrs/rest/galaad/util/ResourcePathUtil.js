"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResourcePathUtil {
    constructor() {
        this.MARK_CHAR = '?';
        this.AMP_CHAR = '&';
        this.EMPTY_STR = '';
    }
    applySegmentParams(state, parameters) {
        if (parameters) {
            const keys = Object.keys(parameters);
            const pathParts = state.resource.split(this.MARK_CHAR);
            let result = pathParts[0];
            let queryParams = pathParts[1];
            keys.forEach((key) => {
                result = result.replace(`:${key}`, parameters[key]);
            });
            if (queryParams) {
                keys.forEach((key) => {
                    const value = parameters[key];
                    const keyRef = `:${key}`;
                    if (value && value !== this.EMPTY_STR) {
                        queryParams = queryParams.replace(keyRef, `${key}=${value}`);
                    }
                    else {
                        queryParams = queryParams.replace(keyRef, this.EMPTY_STR);
                    }
                });
                while (queryParams.endsWith(this.AMP_CHAR)) {
                    queryParams = queryParams.substring(0, queryParams.length - 1);
                }
                result += `?${queryParams}`;
            }
            if (result.endsWith(this.MARK_CHAR)) {
                result = result.substring(0, result.length - 1);
            }
            state.resource = result;
        }
    }
}
exports.ResourcePathUtil = ResourcePathUtil;
