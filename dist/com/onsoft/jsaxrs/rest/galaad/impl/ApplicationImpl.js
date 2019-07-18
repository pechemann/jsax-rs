"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApplicationImpl {
    constructor(name, domain, apiPath, version) {
        this.state = null;
        this.name = null;
        this.domain = null;
        this.apiPath = null;
        this.version = null;
        this.name = name;
        this.domain = domain;
        this.apiPath = apiPath;
        this.version = version;
    }
}
exports.ApplicationImpl = ApplicationImpl;
