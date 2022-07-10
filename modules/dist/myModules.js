"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genereteNumbersRamdom = exports.PI = void 0;
//VARIABLE
exports.PI = 3.14;
;
//FUNCION
function genereteNumbersRamdom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.genereteNumbersRamdom = genereteNumbersRamdom;
