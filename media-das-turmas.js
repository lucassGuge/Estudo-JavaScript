//

const salaJS = [8, 7, 4, 5, 6, 7, 8, 9, 10]
const salaJava = [5, 7, 4, 5, 6, 7, 7, 8, 10]
const salaPython = [5, 3, 4, 5, 6, 5, 7, 9, 10]

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acum, atual ) => atual + acum, 0);
    return somaDasNotas/notasDaSala.length
}
console.log(` Média da sala de Java Script ${mediaSala(salaJS)}`);
console.log(` Média da sala de Java Script ${mediaSala(salaJava)}`);
console.log(` Média da sala de Java Script ${mediaSala(salaPython)}`);


// media

const notas = [8, 7, 4, 5, 6, 7, 8, 9, 10]

const media = notas.reduce( (acum, atual) => atual + acum, 0)/notas.length

console.log(media);
