const mirror = require('../functions/desafio-3')
/* Desafio 3 - Expert: Multiplicação de matrizes
● Escreva testes unitários para uma função que receba duas matrizes e retorne a
sua multiplicação
● As matrizes devem ser representadas como vetores de vetores:
Matriz Identidade 2x2: { {1, 0}, {0, 1} }
Matriz linha 1x3: { {1, 2, 3} }
Matriz coluna 2x1: { {1}, {2} }

● Lembre-se que a multiplicação de uma matriz de tamanho MxN por uma NxP
resulta em uma matriz MxP – note que o N é repetido, caso contrário a
multiplicação seria impossível

● Caso haja incompatibilidade de tamanho, a função deve retornar nulo (nil)

● Verifique se a multiplicação de uma matriz por sua inversa resulta na matriz
identidade
[[2,0],[1,1]] X [[0.5, 0],[-0.5, 1]] => [[1,0],[0,1]]

● Exemplo:multiplica( { {4} , {5} }, { {2, 3} } ) => { {8, 12}, {10, 15} } */
// Para que o produto exista, o número de colunas da primeira matriz tem que ser igual ao número de linhas da segunda matriz. Além disso, o resultado da multiplicação é uma matriz que possui o mesmo número de linhas da primeira matriz e o mesmo número de colunas da segunda matriz.

//  // [[2,0],[1,1]] X [[0.5, 0],[-0.5, 1]] => [[1,0],[0,1]]
   /*   [
      [2,0],
      [1,1]
    ] 

    [
      [0.5, 0],
      [-0.5, 1]
    ]

    [
      [1,0],
      [0,1]
    ] */
multiplicaMatriz
describe('1 - Implemente a função `multiplyMatrices`', () => {
  it('verifica que se o numero de  o número de colunas da primeira matriz for diferente do número de linhas da segunda matriz, a função retorna null ', ( ) => {
    expect(multiplyMatrices()).toBeNull();
  });
  
  it('verifica que a multiplicação de uma matriz por sua inversa resulta na matriz identidade', ( ) => {
    expect(multiplyMatrices([[2,0],[1,1]],[[0.5, 0],[-0.5, 1]])).toEqual([[1,0],[0,1]]);
  });

  it('verifica se a função `multiplyMatrices` realiza a multiplicação  correta dos arrays. ', () => {
    expect(multiplyMatrices([[4], [5]], [[2,3]])).toEqual([8,12,10,15]);
  });
});