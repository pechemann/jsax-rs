"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApplicationImpl {
    constructor(name, authority, apiPath, version, protocol = null) {
        this.state = null;
        this.name = null;
        this.authority = null;
        this.protocol = null;
        this.apiPath = null;
        this.version = null;
        this.name = name;
        this.authority = authority;
        this.apiPath = apiPath;
        this.version = version;
        this.protocol = protocol;
    }
}
exports.ApplicationImpl = ApplicationImpl;
