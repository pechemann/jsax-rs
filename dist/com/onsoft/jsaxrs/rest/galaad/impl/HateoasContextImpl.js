"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationBuilder_1 = require("../util/ApplicationBuilder");
const ResourcePathUtil_1 = require("../util/ResourcePathUtil");
class HateoasContextImpl {
    constructor(context, states) {
        this.CONTEXT = null;
        this.STATES = null;
        this.APP_BUILDER = null;
        this.RESOURCE_PATH_UTIL = null;
        this.CONTEXT = context;
        this.STATES = new Map();
        this.APP_BUILDER = new ApplicationBuilder_1.ApplicationBuilder();
        this.RESOURCE_PATH_UTIL = new ResourcePathUtil_1.ResourcePathUtil();
        this.initStates(states);
    }
    getApplicationContext() {
        return this.CONTEXT;
    }
    getApplicationState(stateName, parameters) {
        const result = this.APP_BUILDER.buildFromContext(this.CONTEXT);
        const state = this.STATES.get(stateName);
        this.RESOURCE_PATH_UTIL.applySegmentParams(state, parameters);
        result.state = state;
        return result;
    }
    getGraph() {
        return null;
    }
    initStates(states) {
        states.forEach((state) => {
            const name = state.name;
            if (!this.STATES.has(name)) {
                this.STATES.set(name, state);
            }
            else {
            }
        });
    }
}
exports.HateoasContextImpl = HateoasContextImpl;
