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
        this._initTransitionList = null;
        this._createTransitionList = null;
        this._initTransitions = null;
        this._initStates = new Array();
        this._initTransitions = new Map();
        this._initTransitionList = new Array();
        this._createTransitionList = new Array();
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
            this.setStatesTransitions();
            this._context = new HateoasContextImpl_1.HateoasContextImpl(appContext, this._initStates);
            this._initStates = null;
            this._initTransitionList.length = 0;
            this._initTransitionList = null;
            this._initTransitions.clear();
            this._initTransitions = null;
            this._stateBuilder = null;
            this._transitionBuilder = null;
            this._createTransitionList.length = 0;
            this._createTransitionList = null;
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
            const transitionRef = config.name;
            const stateRef = config.stateRef;
            if (stateRef) {
                this.addTransitionMappper({ stateRef: stateRef, transitionRef: transitionRef });
            }
            this._initTransitions.set(transitionRef, transition);
        }
    }
    addTransitionMappper(mapper) {
        if (this._context) {
            throw new HateoasContextError_1.HateoasContextError(HateoasContextErrorCode_1.HateoasContextErrorCode.ILLEGAL_TRANSITION_OPERATION, 'You cannot map transitions after application context initialization.');
        }
        else {
            this._initTransitionList.push(mapper);
        }
    }
    declareTransitionFromState(mapper) {
        if (this._context) {
            throw new HateoasContextError_1.HateoasContextError(HateoasContextErrorCode_1.HateoasContextErrorCode.ILLEGAL_TRANSITION_OPERATION, 'You cannot create transition from state after application context initialization.');
        }
        else {
            this._createTransitionList.push(mapper);
        }
    }
    getContext() {
        return this._context;
    }
    setStatesTransitions() {
        this.createTransitionsFromStates();
        this._initStates.forEach((state) => this.assignTransitionsToState(state));
    }
    assignTransitionsToState(state) {
        const stateRef = state.name;
        const mappingList = this._initTransitionList.filter((mapping) => {
            return mapping.stateRef === stateRef;
        });
        if (mappingList.length > 0) {
            const transitions = new Array();
            mappingList.forEach((mapping) => {
                const transitionRef = mapping.transitionRef;
                if (this._initTransitions.has(transitionRef)) {
                    transitions.push(this._initTransitions.get(mapping.transitionRef));
                }
                else {
                    throw new HateoasContextError_1.HateoasContextError(HateoasContextErrorCode_1.HateoasContextErrorCode.INVALID_TRANSITION_MAPPING, `Transition does no exists for the specified state: state=${stateRef}, transition=${transitionRef}`);
                }
            });
            state.transitions = transitions;
        }
    }
    createTransitionsFromStates() {
        this._createTransitionList.forEach((mapping) => this.createTransitionFromState(mapping));
    }
    createTransitionFromState(mapping) {
        const stateRef = mapping.stateRef;
        const transitionRef = mapping.transitionRef;
        const state = this._initStates.find((state) => state.name === stateRef);
        if (state) {
            const transition = this._transitionBuilder.buildFromState(state);
            transition.rel = mapping.rel;
            this._initTransitions.set(transitionRef, transition);
        }
        else {
            throw new HateoasContextError_1.HateoasContextError(HateoasContextErrorCode_1.HateoasContextErrorCode.INVALID_TRANSITION_MAPPING, `State does no exists to create the specified transition: state=${stateRef}, transition=${transitionRef}`);
        }
    }
}
Galaad._instance = null;
exports.Galaad = Galaad;
