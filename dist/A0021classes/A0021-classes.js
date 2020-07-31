"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colaborador = exports.Empresa = void 0;
class Empresa {
    constructor(nome, cnpj) {
        this.colaboradores = [];
        this.nome = nome;
        this.cnpj = cnpj;
    }
    adicionaColaborador(colaborador) {
        this.colaboradores.push(colaborador);
    }
}
exports.Empresa = Empresa;
class Colaborador {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
exports.Colaborador = Colaborador;
const empresa1 = new Empresa('Udemy', '11.111.191/182.82');
const colaborador1 = new Colaborador('Luiz', 'Setten');
const colaborador2 = new Colaborador('Luiz', 'Gustavo');
const colaborador3 = new Colaborador('Luiz', 'Chinelato');
empresa1.adicionaColaborador(colaborador1);
console.log(empresa1);
//# sourceMappingURL=A0021-classes.js.map