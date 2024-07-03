// Define a classe Candidato
class Candidato {
    // Construtor da classe Candidato
    constructor(nome, mensagem) {
        this.nome = nome; // Atributo para armazenar o nome do candidato
        this.mensagem = mensagem; // Atributo para armazenar a mensagem de apoio ao candidato
    }
}

// Array de candidatos, cada um é uma instância da classe Candidato
const candidatos = [
    new Candidato("Bagre Da Silva", "Apoio total ao Bagre!"),
    new Candidato("Luiz Lula", "Força, Tubarão Bruce!"),
    new Candidato("Tilápia Messias", "Beto Blue, o povo está contigo!"),
    new Candidato("Wesley Baiacu", "Wesley é gente como a gente!"),
    new Candidato("Larry Lagosta", "Estamos com você Larry Lagosta!"),
    new Candidato("Harry Poti", "Harry Poti, é 19!"),
];

// Define a classe ApoioCandidato
class ApoioCandidato {
    // Construtor da classe ApoioCandidato
    constructor(candidatos) {
        this.candidatos = candidatos; // Atributo para armazenar a lista de candidatos
        this.botoesCandidatos = document.getElementById('botoes-candidatos'); // Elemento HTML onde os botões serão criados
        this.mensagem = document.getElementById('mensagem'); // Elemento HTML onde a mensagem de apoio será exibida
    }

    // Método para exibir a mensagem de apoio de um candidato específico
    exibirMensagem(indice) {
        this.mensagem.textContent = this.candidatos[indice].mensagem; // Define o texto da mensagem com base no candidato selecionado
    }

    // Método para criar botões para cada candidato e adicionar eventos de clique para exibir suas mensagens de apoio
    criarBotoes() {
        for (let i = 0; i < this.candidatos.length; i++) {
            const botao = document.createElement('button'); // Cria um novo elemento de botão
            botao.classList.add('botao-candidato'); // Adiciona uma classe CSS ao botão
            botao.textContent = this.candidatos[i].nome; // Define o texto do botão como o nome do candidato
            // Adiciona um ouvinte de evento de clique que chama a função exibirMensagem com o índice do candidato como argumento
            botao.addEventListener('click', () => this.exibirMensagem(i));
            this.botoesCandidatos.appendChild(botao); // Adiciona o botão ao elemento HTML correspondente
        }
    }
}

// Cria uma instância da classe ApoioCandidato com a lista de candidatos e chama o método para criar os botões
const apoioCandidato = new ApoioCandidato(candidatos);
apoioCandidato.criarBotoes();
