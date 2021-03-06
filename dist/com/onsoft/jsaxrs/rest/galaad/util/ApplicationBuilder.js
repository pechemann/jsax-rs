"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationImpl_1 = require("../impl/ApplicationImpl");
class ApplicationBuilder {
    build(name, authority, protocol, apiPath, version, state) {
        const app = new ApplicationImpl_1.ApplicationImpl(name, authority, apiPath, version, protocol);
        if (state) {
            app.state = state;
        }
        return app;
    }
    buildFromContext(context, state) {
        const app = new ApplicationImpl_1.ApplicationImpl(context.getName(), context.getAuthority(), context.getApiPath(), context.getApiVersion(), context.getProtocol());
        if (state) {
            app.state = state;
        }
        return app;
    }
}
exports.ApplicationBuilder = ApplicationBuilder;
