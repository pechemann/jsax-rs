"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HateoasContextImpl {
    constructor(context) {
        this.CONTEXT = null;
        this.CONTEXT = context;
    }
    getApplicationContext() {
        return this.CONTEXT;
    }
    getApplicationState(stateName) {
        return null;
    }
}
exports.HateoasContextImpl = HateoasContextImpl;
