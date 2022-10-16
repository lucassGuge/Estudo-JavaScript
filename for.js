//for
const numeros = [100, 200, 300, 400, 500, 600]

for (let i = 0; i < numeros.length; i++){
    console.log(i, numeros[i])
}


// media com for

const notas = [10, 8, 6, 7, 4, 9]

let somaNotas = 0;

for (let i = 0; i < notas.length; i++){
    somaNotas += notas[i];
}

let media = somaNotas/notas.length 

console.log(media) 


// foreach
// callback 
const notas1 = [10, 5, 6, 5, 4, 9]

let somaDasNotas = 0;

notas1.forEach(nota => {
    somaDasNotas += nota
})
let media1 = somaDasNotas/notas1.length

console.log(media1);