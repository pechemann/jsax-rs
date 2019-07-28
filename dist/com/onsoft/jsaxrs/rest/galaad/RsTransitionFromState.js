"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Galaad_1 = require("./core/Galaad");
function RsTransitionFromState(stateRef) {
    return function (target, key) {
        Galaad_1.Galaad.getInstance().declareTransitionFromState({
            stateRef: stateRef,
            transitionRef: key
        });
    };
}
exports.RsTransitionFromState = RsTransitionFromState;
;
