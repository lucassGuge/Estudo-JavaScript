//map

const notas = [10, 9, 8, 7, 6 ]

const notasAtualizadas = notas.map( nota => nota == 10 ? nota : ++nota)

console.log(notasAtualizadas);

// alterar string com map

const nomes = ['João marcos', 'juliana Martins', 'marcos Vinicius', 'Ana Julia']

const nomesAtualizados = nomes.map(nome => nome.toUpperCase());

console.log(nomesAtualizados);