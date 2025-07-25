const notas = [10, 9, 8, 7];
//for - laços de repetição

let somaNotas = 0;
for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i]; // faz com que o valor que está a direita de += seja somado ao valor atual de somaNotas
}
const media = somaNotas / notas.length;
console.log(media);
