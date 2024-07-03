// Função para criar um novo candidato com nome, partido e inicializar os votos como 0
function criarCandidato(nome, partido) {
    return {
        nome: nome,     // Define o nome do candidato
        partido: partido,   // Define o partido do candidato
        votos: 0    // Inicializa o número de votos do candidato como 0
    };
}

// Função para adicionar um voto a um candidato
function adicionarVoto(candidato) {
    candidato.votos++;  // Incrementa o número de votos do candidato em 1
}

// Função para exibir o resultado dos candidatos
function exibirResultados(candidatos) {
    candidatos.forEach(candidato => {
        // Exibe o nome, partido e número de votos de cada candidato no console
        alert(`${candidato.nome} do ${candidato.partido} tem ${candidato.votos} votos.`);
    });
}

// Usando as funções para criar três candidatos
let candidato1 = criarCandidato("Bagre Da Silva", "Partido da Escamas Unidas"); // Criação do primeiro candidato
let candidato2 = criarCandidato("Luiz Lula", "Partido Lulas Trabalhadoras");    // Criação do segundo candidato
let candidato3 = criarCandidato("Tilápia Messias", "Partido Marítmo Irado");    // Criação do terceiro candidato

// Simulando votos
adicionarVoto(candidato1);  // Adiciona dois votos ao candidato1
adicionarVoto(candidato1);
adicionarVoto(candidato2);
adicionarVoto(candidato2);  // Adiciona um voto ao candidato2
adicionarVoto(candidato3);  // Adiciona dois votos ao candidato3
adicionarVoto(candidato3);

// Exibindo os resultados
exibirResultados([candidato1, candidato2, candidato3]);  // Chama a função para exibir os resultados com os candidatos criados

