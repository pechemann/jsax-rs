"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Galaad_1 = require("./core/Galaad");
function RsState(stateConfig) {
    return function (target, methodName, descriptor) {
        if (!stateConfig.name) {
            stateConfig.name = methodName;
        }
        Galaad_1.Galaad.getInstance().registerStateConfig(stateConfig);
        return descriptor;
    };
}
exports.RsState = RsState;
;
