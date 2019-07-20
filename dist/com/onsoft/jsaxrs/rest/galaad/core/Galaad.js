"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationContextImpl_1 = require("../impl/ApplicationContextImpl");
const HateoasContextImpl_1 = require("../impl/HateoasContextImpl");
const StateBuilder_1 = require("../util/StateBuilder");
const HateoasContextError_1 = require("../../hateoas/exception/HateoasContextError");
const HateoasContextErrorCode_1 = require("../../hateoas/exception/HateoasContextErrorCode");
const TransitionBuilder_1 = require("../util/TransitionBuilder");
class Galaad {
    constructor() {
        this._stateBuilder = null;
        this._transitionBuilder = null;
        this._context = null;
        this._initStates = null;
        this._initTransitionMap = null;
        this._initTransitions = null;
        this._initStates = new Array();
        this._initTransitions = new Array();
        this._initTransitionMap = new Array();
        this._stateBuilder = new StateBuilder_1.StateBuilder();
        this._transitionBuilder = new TransitionBuilder_1.TransitionBuilder();
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
            this._initTransitionMap = null;
            this._initTransitions = null;
            this._stateBuilder = null;
            this._transitionBuilder = null;
        }
    }
    registerStateConfig(config) {
        if (this._context) {
            throw new HateoasContextError_1.HateoasContextError(HateoasContextErrorCode_1.HateoasContextErrorCode.ILLEGAL_STATE_OPERATION, 'You cannot add state config after application context initialization.');
        }
        else {
            const state = this._stateBuilder.buildFromConfig(config);
            this._initStates.push(state);
        }
    }
    registerTransitionConfig(config) {
        if (this._context) {
            throw new HateoasContextError_1.HateoasContextError(HateoasContextErrorCode_1.HateoasContextErrorCode.ILLEGAL_TRANSITION_OPERATION, 'You cannot add transition config after application context initialization.');
        }
        else {
            const transition = this._transitionBuilder.buildFromConfig(config);
            console.log(transition);
            this._initTransitions.push(transition);
        }
    }
    addTransitionMappper(mapper) {
        if (this._context) {
            throw new HateoasContextError_1.HateoasContextError(HateoasContextErrorCode_1.HateoasContextErrorCode.ILLEGAL_TRANSITION_OPERATION, 'You cannot map transitions after application context initialization.');
        }
        else {
            console.log(mapper);
            this._initTransitionMap.push(mapper);
        }
    }
    getContext() {
        return this._context;
    }
}
Galaad._instance = null;
exports.Galaad = Galaad;
