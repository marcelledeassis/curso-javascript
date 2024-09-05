/*               --VARIÁVEIS: */

let nome; //declarou váriavel
console.log(nome) //pro motor do JS, indica que a váriavel é undefined/indefinida.

/*let nome; //Declarou a variável e INICIALIZOU. 
nome = 'João' // Inicializando a variável 
console.log(nome) 
nome = 'Ruan' //Variável varia, ou seja, podemos modificar o valor da variável.
console.log (nome)*/

// NÃO podemos REDECLARAR uma variável! 
// NÃO podemos criar variáveis com palavras reservadas pelo JAVASCRIPT, ex: let let / let console...

//------------REGRAS---------------
//VARIÁVEIS PRECISAM TER NOMES SIGNIFICATIVOS!!

//let n = campoBaseDeDados; //errata
//console.log (n); 

//correção:

//let nomeCliente = 'João';
//console.log (nomeCliente);

//NÃO podemos começar o nome de uma variável com número, por ex:
//let 1nome; -sempre comece com letras, minúsculas preferencialmente
//Não podem conter espaços ou traços, ex: let nome Cliente ='' 
//Utilizamos por convenção camelCase, ex:

let nomeCompletoDoCliente = 'Marcelle de Assis'; 
console.log(nomeCompletoDoCliente);
// as variavéis sao Case-sensitive = letra maiuscula e minuscula faz diferença, ex:
let nomeCliente ='Marcelle';
nomecliente ='de Assis' //para alterar utilize apenas o valor 
//exemplos acima pro javascript possuem valores diferentes.
console.log(nomeCliente, nomecliente);

//não podemos redeclarar variáveis com let, apenas mudar o VALOR das mesmas.
//não utilize var, utilize let.

