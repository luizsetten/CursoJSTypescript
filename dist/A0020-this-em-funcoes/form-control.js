"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.funcao = void 0;
function funcao(argumento1, age) {
    console.log(this);
    console.log(argumento1, age);
}
exports.funcao = funcao;
funcao.call(new Date(), 'Luiz', 22);
funcao.apply(new Date(), ['Luiz', 22]);
//# sourceMappingURL=form-control.js.map