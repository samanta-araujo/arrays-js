const notas =[10,9, 8, 6, 5];

let somaNotas = 0;
notas.forEach( function (nota){
    somaNotas += nota;
});
const media = somaNotas / notas.length;
console.log(media);
// o forEach() é um método do objeto Array. apesar da sintaxe bem diferente, podemos utilizar este método como o for ou o for…of, pois ele vai executar as instruções que forem passadas para cada elemento iterado, sem retornar nenhum dado.