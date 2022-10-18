//

class cliente {
    constructor(nome,email,cpf,saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;

    }

    depositar(valor){
        this.saldo += valor;

    }

    exibirSaldo(){
        console.log(this.saldo);
    }
}

const andre = new cliente("Andre","emailandre@email.com","587844568", 100);

console.log(andre);