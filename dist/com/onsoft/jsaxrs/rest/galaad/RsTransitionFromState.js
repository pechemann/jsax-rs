"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Galaad_1 = require("./core/Galaad");
function RsTransitionFromState(stateRef, rel) {
    return function (target, key) {
        const mapping = {
            stateRef: stateRef,
            transitionRef: key,
            rel: rel
        };
        const getter = () => {
            return mapping;
        };
        const setter = () => { };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: false
        });
        Galaad_1.Galaad.getInstance().declareTransitionFromState(mapping);
    };
}
exports.RsTransitionFromState = RsTransitionFromState;
;
