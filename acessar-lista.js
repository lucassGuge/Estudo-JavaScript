//

const cliente ={
    nome : "andre",
    idade: 36   ,
    cpf: "856-885-658-35",
    email: "andre@andre.com"

}

const chaves = [ "nome", "idade", "cpf", "email"]

console.log(cliente[chaves[0]]);
console.log(cliente[chaves[1]]);
console.log(cliente[chaves[2]]);
console.log(cliente[chaves[3]]);

//foreach

chaves.forEach(info=>console.log(cliente[info]));

console.log(cliente["nome"]);

