"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApplicationContextImpl {
    constructor(config) {
        this.NAME = null;
        this.AUTHORITY = null;
        this.PROTOCOL = null;
        this.API_PATH = null;
        this.VERSION = null;
        this.NAME = config.name;
        this.AUTHORITY = config.authority;
        this.API_PATH = config.apiPath;
        this.VERSION = config.version;
        this.PROTOCOL = config.protocol;
    }
    getName() {
        return this.NAME;
    }
    getAuthority() {
        return this.AUTHORITY;
    }
    getProtocol() {
        return this.PROTOCOL;
    }
    getApiPath() {
        return this.API_PATH;
    }
    getApiVersion() {
        return this.VERSION;
    }
}
exports.ApplicationContextImpl = ApplicationContextImpl;
