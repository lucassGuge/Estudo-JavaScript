//

const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '2548657962',
    email:'andre@email.com',
    fones: ['556588889999','556599887755'],
    dependentes: [
        {
            nome:'Sara silva',
            parentesco: 'filha',
            dataNasc: '03/05/2011'
        },
        {
            samia: 'Samia Silva',
            parentesco: 'filha',
            dataNasc: '23/09/2008',
        }
    ],
    saldo: 100,
    depositar: function (valor){
        this.saldo += valor;
    }
}

console.log(cliente.saldo);
cliente.depositar  (30);
console.log(cliente.saldo);
