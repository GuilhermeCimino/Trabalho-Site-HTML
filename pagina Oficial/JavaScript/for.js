// Array de números
const numeros = [17, 50.5, 5, 89, 47];

// Variável para armazenar a soma dos números
let soma = 0;

// Loop for para calcular a soma dos números
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]; // Adiciona o número atual à soma
}

// Exibe a soma no console
console.log("Soma dos números:", soma);

// Usando forEach() para exibir cada número no console
console.log("Números no array:");
numeros.forEach(numero => {
    console.log(numero); // Exibe cada número individualmente no console
});
