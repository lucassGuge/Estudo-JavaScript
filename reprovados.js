//
const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjore']

const notas = [ 8, 7, 4, 5, 8, 3]

const reprovados = nomes.filter (( aluno, indice ) =>  notas[indice]< 5 )

console.log(` reprovados: ${reprovados.length}`);