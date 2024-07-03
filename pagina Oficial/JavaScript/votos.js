// Objeto contendo as opções de voto e seus respectivos contadores
let votes = {
    "Option 1": 0,
    "Option 2": 0,
    "Option 3": 0
};

// Função para registrar um voto para a opção especificada
function submitVote(option) {
    votes[option]++; // Incrementa o contador da opção de voto
    updateResults(); // Chama a função para atualizar os resultados
}

// Função para atualizar os resultados exibidos na página
function updateResults() {
    // Atualiza o texto dos elementos HTML com os contadores de votos para cada opção
    document.getElementById('count1').textContent = votes['Option 1']; // Atualiza o contador para Option 1
    document.getElementById('count2').textContent = votes['Option 2']; // Atualiza o contador para Option 2
    document.getElementById('count3').textContent = votes['Option 3']; // Atualiza o contador para Option 3
}
