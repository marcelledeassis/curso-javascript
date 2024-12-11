//  window.alert ('Ola mundo!'); //gera janela de alerta, podemos abreviar para alert ('')
// window.confirm ('Deseja realmente apagar?'); // gera janela de confirmação
// true //valor boolean
// window.confirm ('Deseja realmente apagar?');
// false // valor boolean
//window.prompt('Digite seu nome:'); //gera janela de input de dados

//quando uma função esta dentro de um objeto chamamos de método, se estiver fora, chamamos de função.

//os métodos podem ou não retornar um valor, ao inserir alert note que o valor retornado é o undefined, já ao inserir o console.log('Olá'); o valor que retorna é o olá. na função confirm eu poderia capturar oq foi retornado pela mensagem. por exemplo: 
//const confirma = confirm ('Reaalmente deseja apagar?'); //aparece um valor boolean no navegador
//console.log (confirma); 

/**
 outra coisa que podemos salvar em variaveis é a função prompt.
 tudo que o usuário digitar na função prompt vai ser retornado como string.
 como converter os dados que o usuario forneceu (string) em number?
 exercicio:

 let num1 = prompt ("Digite um número");
let num2 = prompt ("Digite um número")

num1 = Number (num1);
num2 = Number (num2);
/*console.log (num1 + num2);
alert('O resultado da sua conta foi: ' + resultado);
*/


let num1 = prompt ("Digite um número");
let num2 = prompt ("Digite um número")

num1 = Number (num1);
num2 = Number (num2);
/*console.log (num1 + num2);*/

/*formula mais moderna e retorna o msm resultado*/
alert(`O resultado da sua conta foi: ${num1 + num2}`); /*usado em codigo simples, em complexos nao eh bom.*/
