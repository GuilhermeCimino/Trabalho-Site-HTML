// Defina a data da eleição (substitua com a data real da sua eleição)
const electionDate = new Date('2024-10-26T00:00:00');

// Função para atualizar a contagem regressiva
function updateCountdown() {
    const currentDate = new Date(); // Obtém a data e hora atuais
    const difference = electionDate - currentDate; // Calcula a diferença entre a data da eleição e a data atual

    // Calcula o número de dias, horas, minutos e segundos restantes
    const days = Math.floor(difference / (1000 * 60 * 60 * 24)); // Dias restantes
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Horas restantes
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)); // Minutos restantes
    const seconds = Math.floor((difference % (1000 * 60)) / 1000); // Segundos restantes

    // Atualiza o elemento HTML com a contagem regressiva
    document.getElementById('countdown').innerHTML = `${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

// Chame a função inicialmente para evitar atrasos na exibição da contagem regressiva
updateCountdown();

// Atualiza a contagem regressiva a cada segundo usando setInterval
setInterval(updateCountdown, 1000);
