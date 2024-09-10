//CONSTANTES e VARIÁVEIS
/*O que são variáveis e constantes?
Variáveis: São como caixas que podem guardar diferentes valores ao longo do tempo. O valor dentro da caixa pode mudar quando quisermos.

Constantes: São como caixas que só podem ser preenchidas uma vez. Uma vez que você coloca algo dentro, você não pode mais trocar.

Para criar uma variável, usamos let. Para criar uma constante, usamos const.
Usamos o sinal de igual (=) para atribuir um valor a uma variável ou constante.
Podemos usar o nome da variável ou constante em qualquer lugar do código para acessar o valor que ela armazena.
*/

//Criando constantes
const primeiroNumero = 5
const segundoNumero = 10
const resultado = primeiroNumero * segundoNumero 
const resultadoDuplicado = resultado * 2
// Criando uma variável e calculando
let resultadoTriplicado = resultado * 3 //Use let para criar caixas que podem mudar de conteúdo.
// Alterando o valor da variável
resultadoTriplicado = resultadoTriplicado + 5
console.log(typeof primeiroNumero) // Use typeof para verificar o tipo de dado. Imprime "number"

