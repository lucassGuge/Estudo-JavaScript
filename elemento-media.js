// adicionar notas // push adiciona elemento no array
const notas = [ 10, 6, 8]
notas.push(7);
console.log(notas);

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log(media);

//deletando notas // pop deleta o ultimo elemento no array

const notas1 = [ 10, 7, 8, 5, 10 ]

notas1.pop()
console.log(notas1);

let media1 = (notas1[0] + notas1[1] + notas1[2] + notas1[3]) / notas1.length

console.log(`a media é  ${media1}`);

//array vazia
const arrayVazia = [];

console.log(arrayVazia)
console.log(arrayVazia.length)