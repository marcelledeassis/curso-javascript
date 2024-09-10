//DIFERENÇAS ENTRE VAR E LET
//sempre que uso a palavra 'var' estou declarando uma variavel, se eu utilizo esta palavra novamente, estou redeclarando uma variavel. com 'let' isso geraria um erro, mas com var eu posso fazer.
var nome = 'Marcelle'; 
var nome = 'de Assis'
console.log (nome);
//sempre especifique as variaveis, a falta de especificação gera uma alteração global no código. ex: 
//nome = 'Luiz';
//console.log(nome);
//o código roda, mas altera tudo, não é recomendavel fazer isso. portanto não crie variaveis sem usar var, const ou let

//LET: diferente da variavel, eu não posso redeclarar, isso gera um erro na execução do código
let nome = 'Marcelle'
let nome = 'de Assis'
console.log (nome) 
//SyntaxError: Identifier 'nome' has already been declared. 