const mirror = require('../functions/desafio-1')
/* 
esafio 1: Função Espelho
● Escreva testes unitários para uma função que retorna o espelho de um número
(ignorando a parte decimal)
● Exemplos:
espelho(123) => 321
espelho(100) => 1
espelho(2344) => 4432

*/
describe('1 - Implemente a função `espelho`', () => {
  it('Verfica que ao receber um numero, a funcão `espelho` retorna o espelho de um número, com os algarismos em em ordem invertida', () => {
    expect(mirror(123)).toEqual(321);
  });

  it('Verifica que a parte decimal de um número não deve ser retornada', () => {
    expect(mirror(100)).toEqual(1);
  });

  it('verifica que ao receber numeros iguais eles devem ser espelhados da mesma forma que os outros números ', () => {
    expect(mirror(2344)).toEqual(4432);
  });

});