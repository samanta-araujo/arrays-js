const notas = [10, 9, 8, 7, 7.5, 6];
// for = laços de repetição
//primeira expressão: executada apenas uma vez
//segunda expressão: condição que será avaliada antes de cada iteração (condição de execução)
//terceira expressão: executada sempre ao final do bloco de código

for (let indice = 0; indice < notas.length; indice++) {
    console.log (indice, notas [indice]);
}