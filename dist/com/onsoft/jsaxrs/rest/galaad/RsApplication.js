"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Galaad_1 = require("./core/Galaad");
function RsApplication(config) {
    Galaad_1.Galaad.getInstance().createContext(config);
    return function (constructorFunction) {
        return constructorFunction;
    };
}
exports.RsApplication = RsApplication;
;
