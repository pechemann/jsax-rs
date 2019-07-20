"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationContextImpl_1 = require("../impl/ApplicationContextImpl");
const HateoasContextImpl_1 = require("../impl/HateoasContextImpl");
const StateBuilder_1 = require("../util/StateBuilder");
const HateoasContextError_1 = require("../../hateoas/exception/HateoasContextError");
const HateoasContextErrorCode_1 = require("../../hateoas/exception/HateoasContextErrorCode");
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
            throw new HateoasContextError_1.HateoasContextError(HateoasContextErrorCode_1.HateoasContextErrorCode.ILLEGAL_CONTEXT_OVERRIDE, 'A context already exists for this application.');
        }
        else {
            const appContext = new ApplicationContextImpl_1.ApplicationContextImpl(config);
            this._context = new HateoasContextImpl_1.HateoasContextImpl(appContext, this._initStates);
            this._initStates = null;
        }
    }
    registerStateConfig(config) {
        if (this._context) {
            throw new HateoasContextError_1.HateoasContextError(HateoasContextErrorCode_1.HateoasContextErrorCode.ILLEGAL_STATE_OPERATION, 'You cannot add state config after this application context initialization.');
        }
        else {
            const state = this.STATE_BUILDER.buildFromConfig(config);
            this._initStates.push(state);
        }
    }
    registerTransitionConfig(config) {
        if (this._context) {
            throw new HateoasContextError_1.HateoasContextError(HateoasContextErrorCode_1.HateoasContextErrorCode.ILLEGAL_TRANSITION_OPERATION, 'You cannot add transition config after this application context initialization.');
        }
        else {
            console.log(config);
        }
    }
    getContext() {
        return this._context;
    }
}
Galaad._instance = null;
exports.Galaad = Galaad;
