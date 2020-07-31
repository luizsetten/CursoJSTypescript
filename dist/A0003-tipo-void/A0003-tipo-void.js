"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoa = void 0;
function semRetorno(...args) {
    console.log(args.join(' '));
}
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Setten',
    exibirNome() {
        console.log(this.nome + ' ' + this.sobrenome);
    },
};
exports.pessoa = pessoa;
semRetorno('Luiz', 'Setten');
//# sourceMappingURL=A0003-tipo-void.js.map