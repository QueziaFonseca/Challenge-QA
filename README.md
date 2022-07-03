# Bem vindo ao Repositório solução ao Desafio técnico de Quality Assurance.
Neste projeto foram desenvolvidas funções e seus respectivos testes unitários utilizando Javascript e Jest.

# Instruções para execução deste projeto

‼️ Para desenvolvimento da solução foi utilizada a linguagem javascript , por isso para execução do projeto é necessário a instalação do **Node js**. [Dowload Nodejs](https://nodejs.org/en/download/)

1. Clone o repositório digitando no terminal:
  - `git clone git@github.com:QueziaFonseca/QA-Challenge.git`
Entre na pasta do repositório que você acabou de clonar:
  - `cd QA-Challenge`

2. Instale as dependências digitando no terminal o comando:
  - `npm install`

3. Execute os testes localmente  digitando no terminal:
  - `npm test`

    Você pode desabilitar temporariamente um teste utilizando a função skip junto à função describe. 
    ```typescript
    describe.skip('...', () => {})
    ```

# Requisitos
 
  1. Função Espelho
  -Escreva testes unitários para uma função que retorna o espelho de um número (ignorando a parte decimal)
   -Exemplos:
	espelho(123) => 321
	espelho(100) => 1
	espelho(2344) => 4432
  
  2. Segundo maior valor
	-Escreva testes unitários para uma função que retorna o segundo maior número
de um vetor
	- Exemplos:
	segundo({1, 2, 3, 4}) => 3
	segundo({1, 2, 3, 4, 5, 5}) => 4
	segundo({1, 1}) => erro
	segundo({1, 2}) => 1
	segundo({2}) => erro
	
  3. Expert: Multiplicação de matrizes
	- Escreva testes unitários para uma função que receba duas matrizes e retorne a
	sua multiplicação
	- As matrizes devem ser representadas como vetores de vetores:
	Matriz Identidade 2x2: { {1, 0}, {0, 1} }
	Matriz linha 1x3: { {1, 2, 3} }
	Matriz coluna 2x1: { {1}, {2} }
	- Lembre-se que a multiplicação de uma matriz de tamanho MxN por uma NxP
	resulta em uma matriz MxP – note que o N é repetido, caso contrário a
	multiplicação seria impossível
	- Caso haja incompatibilidade de tamanho, a função deve retornar nulo (nil)
	- Verifique se a multiplicação de uma matriz por sua inversa resulta na matriz
	identidade
	- Exemplo:multiplica( { {4} , {5} }, { {2, 3} } ) => { {8, 12}, {10, 15} }
  
  4. Casos de teste de software
  	- Escreva 10 casos de teste para as funções do controle de um ar-condicionado.
Espera-se boa percepção nos detalhes

  5. Em sua opinião, qual a relevância da automação de testes para a qualidade de
software?
  
