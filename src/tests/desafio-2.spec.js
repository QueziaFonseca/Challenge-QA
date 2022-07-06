const secondLargest = require('../functions/desafio-2');
const mirror = require('../functions/desafio-2');
/* 
Escreva testes unitários para uma função que retorna o segundo maior número
de um vetor

segundo({1, 2, 3, 4}) => 3 //
segundo({1, 2, 3, 4, 5, 5}) => 4
segundo({1, 1}) => erro
segundo({1, 2}) => 1
segundo({2}) => erro
*/

// ● Exemplo:
// segundo({1, 2, 3, 4}) => 3 //
// segundo({1, 2, 3, 4, 5, 5}) => 4
// segundo({1, 1}) => erro
// segundo({1, 2}) => 1
// segundo({2}) => erro

describe('1 - Implemente a função `segundoMaior`', () => {
  it(' Verifica que ao receber um array de números, o segundo maior número é retornado', () => {
    expect(secondLargest([1, 2, 3, 4])).toEqual(3);
  });

  it(' Verifica que ao receber um array de números, com um número repetido, o segundo maior número é retornado', () => {
    expect(secondLargest([1, 2, 3, 4, 5, 5])).toEqual(4);
  });

  it(' Verifica que ao receber um array com apenas dois números iguais, a função "secondLargest" lança um erro', () => {
    expect(() => {
      secondLargest([1, 1]);
    }).toThrow('insira um array valido');
  });

  it(' Verifica que ao receber um array com dois números diferentes, o segundo maior é retornado', () => {
    expect(secondLargest([1, 2])).toEqual(1);
  });

  it(' Verifica que ao receber um array com apenas um número, a função "secondLargest" lança um erro ', () => {
    expect(() => {
      secondLargest([2]);
    }).toThrow('insira um array valido');
  });

});