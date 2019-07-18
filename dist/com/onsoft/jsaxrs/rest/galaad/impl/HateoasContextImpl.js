"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationBuilder_1 = require("../util/ApplicationBuilder");
class HateoasContextImpl {
    constructor(context, states) {
        this.CONTEXT = null;
        this.STATES = null;
        this.APP_BUILDER = null;
        this.CONTEXT = context;
        this.STATES = new Map();
        this.APP_BUILDER = new ApplicationBuilder_1.ApplicationBuilder();
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
    initModel(context) {
        const builder = new ApplicationBuilder_1.ApplicationBuilder();
        return builder.build(context.getName(), context.getDomain());
    }
}
exports.HateoasContextImpl = HateoasContextImpl;
