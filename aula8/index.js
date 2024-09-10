const nome = 'Marcelle';
const sobrenome = 'de Assis';
const idade = 24;
const peso = 79;
const alturaEmM = 1.67;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

//lembre-se não precisa repetir let/const. use apenas o rotulo/nome da variavel/constante.
indiceMassaCorporal = peso / (alturaEmM * alturaEmM); 
anoNascimento = 2024 - idade;
//utilizamos a vírgula pq são valores diferentes.  utilizamos o + para unir valores, forma antiga.
//template strings: a forma mais simples de unir valores e mais moderna
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`); //ñ esqueça do ``
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`); 
console.log(`${nome} nasceu em ${anoNascimento}.`);  

