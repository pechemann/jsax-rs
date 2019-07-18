"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApplicationContextImpl {
    constructor(config) {
        this.NAME = null;
        this.DOMAIN = null;
        this.API_PATH = null;
        this.VERSION = null;
        this.NAME = config.name;
        this.DOMAIN = config.domain;
        this.API_PATH = config.apiPath;
        this.VERSION = config.version;
    }
    getName() {
        return this.NAME;
    }
    getDomain() {
        return this.DOMAIN;
    }
    getApiPath() {
        return this.API_PATH;
    }
    getApiVersion() {
        return this.VERSION;
    }
}
exports.ApplicationContextImpl = ApplicationContextImpl;
