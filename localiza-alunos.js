//localizar alunos na lista

const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjore']

const mediaDosAlunos = [10, 7, 4, 5, 10,  8]

let listaDeNotas = [alunos, mediaDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
     if (listaDeNotas [0].includes(nomeDoAluno)){
        let indice = listaDeNotas[0].indexOf(nomeDoAluno);
        return listaDeNotas[0][indice] + ', sua media é '+ listaDeNotas[1][indice]
        } else {
        return "Aluno não esta cadastrado"
     }
}

console.log(exibeNomeNota("Ana"));
console.log(exibeNomeNota("Juliana"));
console.log(exibeNomeNota("Carlos"));