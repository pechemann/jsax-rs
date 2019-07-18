"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationContextImpl_1 = require("../impl/ApplicationContextImpl");
const HateoasContextImpl_1 = require("../impl/HateoasContextImpl");
const StateBuilder_1 = require("../util/StateBuilder");
class Galaad {
    constructor() {
        this.STATE_BUILDER = null;
        this._context = null;
        this._initStates = null;
        this._initStates = Array();
        this.STATE_BUILDER = new StateBuilder_1.StateBuilder();
    }
    static getInstance() {
        return Galaad._instance || (Galaad._instance = new Galaad());
    }
    createContext(config) {
        if (this._context) {
        }
        else {
            const appContext = new ApplicationContextImpl_1.ApplicationContextImpl(config);
            this._context = new HateoasContextImpl_1.HateoasContextImpl(appContext, this._initStates);
            this._initStates = null;
        }
    }
    registerStateConfig(stateConfig) {
        if (this._context) {
        }
        else {
            const state = this.STATE_BUILDER.buildFromConfig(stateConfig);
            this._initStates.push(state);
        }
    }
    getContext() {
        return this._context;
    }
}
Galaad._instance = null;
exports.Galaad = Galaad;
