// objeto

const cliente ={
    nome : "andre",
    idade: 36   ,
    cpf: "856-885-658-35",
    email: "andre@andre.com"

}

console.log(cliente.nome);
console.log(cliente.idade);
console.log(cliente.cpf);
console.log(cliente.email);

console.log(` Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos meu email é 
${cliente.email}`);

console.log(cliente.cpf.substring(8,14));