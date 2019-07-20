"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HateoasContextError extends Error {
    constructor(code, message) {
        super(message);
        this.code = null;
        this.code = code;
    }
}
exports.HateoasContextError = HateoasContextError;
