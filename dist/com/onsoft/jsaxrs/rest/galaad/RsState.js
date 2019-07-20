"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Galaad_1 = require("./core/Galaad");
function RsState(config) {
    return function (target, methodName, descriptor) {
        if (!config.name) {
            config.name = methodName;
        }
        Galaad_1.Galaad.getInstance().registerStateConfig(config);
        return descriptor;
    };
}
exports.RsState = RsState;
;
