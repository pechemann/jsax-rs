"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApplicationImpl {
    constructor(name, authority, apiPath, version) {
        this.state = null;
        this.name = null;
        this.authority = null;
        this.apiPath = null;
        this.version = null;
        this.name = name;
        this.authority = authority;
        this.apiPath = apiPath;
        this.version = version;
    }
}
exports.ApplicationImpl = ApplicationImpl;
