"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApplicationUtil {
    createAppRepresentation(application) {
        let result = {};
        result.name = application.name;
        result.state = application.state;
        if (application.domain) {
            result.domain = application.domain;
        }
        if (application.apiPath) {
            result.apiPath = application.apiPath;
        }
        if (application.version) {
            result.version = application.version;
        }
        return result;
    }
    createAppRepresentationFromContext(context) {
        let result = {};
        let prop = context.getName();
        if (prop) {
            result.name = prop;
        }
        prop = context.getDomain();
        if (prop) {
            result.domain = prop;
        }
        prop = context.getApiPath();
        if (prop) {
            result.apiPath = prop;
        }
        prop = context.getApiVersion();
        if (prop) {
            result.version = prop;
        }
        return result;
    }
}
exports.ApplicationUtil = ApplicationUtil;
