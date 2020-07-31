export class Empresa {
  readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '11.111.191/182.82');
const colaborador1 = new Colaborador('Luiz', 'Setten');
const colaborador2 = new Colaborador('Luiz', 'Gustavo');
const colaborador3 = new Colaborador('Luiz', 'Chinelato');
empresa1.adicionaColaborador(colaborador1);
console.log(empresa1);
