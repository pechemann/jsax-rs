"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationBuilder_1 = require("../util/ApplicationBuilder");
const ResourcePathUtil_1 = require("../util/ResourcePathUtil");
const HateoasContextErrorCode_1 = require("../../hateoas/exception/HateoasContextErrorCode");
const HateoasContextError_1 = require("../../hateoas/exception/HateoasContextError");
const StateUtil_1 = require("../util/StateUtil");
const ApplicationUtil_1 = require("../util/ApplicationUtil");
class HateoasContextImpl {
    constructor(context, states) {
        this.CONTEXT = null;
        this.STATES = null;
        this.APP_BUILDER = null;
        this.RESOURCE_PATH_UTIL = null;
        this.STATE_UTIL = null;
        this.APP_UTIL = null;
        this.CONTEXT = context;
        this.STATES = new Map();
        this.APP_BUILDER = new ApplicationBuilder_1.ApplicationBuilder();
        this.RESOURCE_PATH_UTIL = new ResourcePathUtil_1.ResourcePathUtil();
        this.STATE_UTIL = new StateUtil_1.StateUtil();
        this.APP_UTIL = new ApplicationUtil_1.ApplicationUtil();
        this.initStates(states);
    }
    getApplicationContext() {
        return this.CONTEXT;
    }
    getApplicationState(stateName) {
        const result = this.APP_BUILDER.buildFromContext(this.CONTEXT);
        result.state = this.STATES.get(stateName);
        return result;
    }
    getResourceStateRepresentation(stateName, parameters) {
        const result = this.APP_UTIL.createAppRepresentationFromContext(this.CONTEXT);
        const stateRepresentation = this.STATE_UTIL.createStateRepresentation(this.STATES.get(stateName));
        const transitions = stateRepresentation.transitions;
        stateRepresentation.resource =
            this.RESOURCE_PATH_UTIL.setSegmentParams(stateRepresentation.resource, parameters);
        result.state = stateRepresentation;
        if (transitions) {
            transitions.forEach((transition) => {
                transition.resource =
                    this.RESOURCE_PATH_UTIL.setSegmentParams(transition.resource, parameters);
            });
        }
        return result;
    }
    getGraph() {
        return Array.from(this.STATES.values());
    }
    initStates(states) {
        states.forEach((state) => {
            const name = state.name;
            if (!this.STATES.has(name)) {
                this.STATES.set(name, state);
            }
            else {
                throw new HateoasContextError_1.HateoasContextError(HateoasContextErrorCode_1.HateoasContextErrorCode.INVALID_STATE_CONFIG, `A state with the same name already exists in the application context: state=${name}`);
            }
        });
    }
}
exports.HateoasContextImpl = HateoasContextImpl;
