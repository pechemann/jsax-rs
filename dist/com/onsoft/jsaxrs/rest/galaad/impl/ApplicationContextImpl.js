"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApplicationContextImpl {
    constructor(config) {
        this.NAME = null;
        this.DOMAIN = null;
        this.NAME = config.name;
        this.DOMAIN = config.domain;
    }
    getName() {
        return this.NAME;
    }
    getDomain() {
        return this.DOMAIN;
    }
}
exports.ApplicationContextImpl = ApplicationContextImpl;
