const objetoA: {
  readonly chaveA: string;
  chaveB: string;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveB = 'Nova Chave';

console.log(objetoA);
