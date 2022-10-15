const nome = "Ju ";
const idade =" 40 "
const cidadeNascimento = "São Paulo";

const apresentacao = "Meu nome é " + nome + ", minha idade é "
 + idade + " e nasci na cidade de " + cidadeNascimento;

console.log(apresentacao);

// template
const nome1 = "Juca ";
const idade1 =" 45 "
const cidadeNascimento1 = "Cuiabá";
const apresentacao1 = `Meu nome é ${nome1}, minha idade é ${idade1} 
e nasci na cidade de ${cidadeNascimento1}`;

console.log(apresentacao1);

//atividade 

a = []
b = 20
c = true 
d = ''

//
const nome2 = "Leo";
const idade2 = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome2} diz: "por favor, quero beber ${idade2 >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)