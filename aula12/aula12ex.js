/*
exercicio de variaveis abaixo:
----- como trocar os valores das variaveis: O valor de A é pra ser = a B e o valor de B é pra ser igual a C e o valor de C = A. 
resposta:
 */
let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

console.log (varA, varB, varC);

/*
a solução acima é a mais antiga porem correta de resolver. 
um exemplo de solução errada é
varA = varB;
varB = varC;
varC = varA;

porque na primeira linha o valor de A já foi perdido. 
o correto a se fazer é 
const varATemp = varA; 
a const varATemp cria uma variavel e salva temporariamente o valor de A e podemos utilizar ela para trocar o valor.
-------------------------------------------------
tem uma maneira mais moderna em javascript para resolver o problema sem criar uma nova variavel:

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

[varA, varB, varC] = [varB, varC, varA]

console.log (varA, varB, varC);

ou seja, inverti o valor das variaveis mas nao precisei criar uma nova. f
*/
