"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationContextImpl_1 = require("../impl/ApplicationContextImpl");
const HateoasContextImpl_1 = require("../impl/HateoasContextImpl");
class Galaad {
    constructor() {
        this._context = null;
    }
    static getInstance() {
        return Galaad._instance || (Galaad._instance = new Galaad());
    }
    init(config) {
        if (this._context) {
        }
        else {
            const appContext = new ApplicationContextImpl_1.ApplicationContextImpl(config);
            this._context = new HateoasContextImpl_1.HateoasContextImpl(appContext);
        }
    }
    getContext() {
        return this._context;
    }
}
Galaad._instance = null;
exports.Galaad = Galaad;
