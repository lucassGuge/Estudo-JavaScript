 //nomes sala slice divide a array

 const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjore']

 const sala1 = nomes.slice(0, nomes.length/2);
 const sala2 = nomes.slice(nomes.length/2);

 console.log(`Alunos da sala 1 ${sala1}`);
 console.log(`Alunos da sala 2 ${sala2}`);

 // atualizando termos //splice altera remove e adiciona // altera o array original

 const listaDeChamadas = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjore']

 listaDeChamadas.splice(1,2,'rodrigo');

 console.log(` Lista de Chamada: ${listaDeChamadas}`);
