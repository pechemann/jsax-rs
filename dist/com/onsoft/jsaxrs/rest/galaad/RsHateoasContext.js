"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Galaad_1 = require("./core/Galaad");
function RsHateoasContext() {
    return function (target, key) {
        const getter = () => {
            return Galaad_1.Galaad.getInstance().getContext();
        };
        const setter = () => { };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: false
        });
    };
}
exports.RsHateoasContext = RsHateoasContext;
;
