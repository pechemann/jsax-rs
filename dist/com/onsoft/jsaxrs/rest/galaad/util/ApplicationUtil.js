"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApplicationUtil {
    createAppRepresentation(application) {
        let result = {};
        result.name = application.name;
        result.state = application.state;
        if (application.authority) {
            result.authority = application.authority;
        }
        if (application.apiPath) {
            result.apiPath = application.apiPath;
        }
        if (application.version) {
            result.version = application.version;
        }
        if (application.protocol) {
            result.protocol = application.protocol;
        }
        return result;
    }
    createAppRepresentationFromContext(context) {
        const protocol = context.getProtocol();
        let result = {};
        let prop = context.getName();
        if (prop) {
            result.name = prop;
        }
        prop = context.getAuthority();
        if (prop) {
            result.authority = prop;
        }
        prop = context.getApiPath();
        if (prop) {
            result.apiPath = prop;
        }
        prop = context.getApiVersion();
        if (prop) {
            result.version = prop;
        }
        prop = context.getApiVersion();
        if (protocol) {
            result.protocol = protocol;
        }
        return result;
    }
}
exports.ApplicationUtil = ApplicationUtil;
