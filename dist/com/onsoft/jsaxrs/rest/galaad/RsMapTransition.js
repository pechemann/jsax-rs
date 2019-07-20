"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Galaad_1 = require("./core/Galaad");
function RsMapTransition(transitionRef) {
    return function (target, methodName, descriptor) {
        Galaad_1.Galaad.getInstance().addTransitionMappper({
            stateRef: methodName,
            transitionRef: transitionRef
        });
        return descriptor;
    };
}
exports.RsMapTransition = RsMapTransition;
;
