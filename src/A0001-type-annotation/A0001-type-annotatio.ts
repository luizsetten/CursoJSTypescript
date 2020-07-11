/* eslint-disable */
let nome: string = 'Luiz';

// Arrays
let arrayOfNumbers: Array<number> = [1, 2, 3];
let arrayOfStrings: string[] = ['a', 'b'];

// Objetos
let pessoa: {name: string, idade: number, adult?: boolean} = {
  idade: 30,
  name: 'Luiz Gustavo',
};

// Funções
function soma(x: number, y: number) {
  return x + y;
}

const soma2: (x:number, y: number) => number = (x, y) => x + y;
