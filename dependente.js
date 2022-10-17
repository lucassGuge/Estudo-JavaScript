const cliente ={
    nome : "andre",
    idade: 36   ,
    cpf: "856-885-658-35",
    email: "andre@andre.com",
    fones: ["8585-8585",
    "6974-3652"],
    dependentes: [{
        Nome: "Sara",
        parentesco : "Filha",
        dataNasc: "08/05/1995"
    }]

} 

cliente.dependentes.push({
    Nome: "Juca",
        parentesco : "Filho",
        dataNasc: "08/05/1992"
})

console.log(cliente);
