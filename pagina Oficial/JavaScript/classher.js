// Definição da classe Pessoa
class Pessoa {
    // Construtor da classe Pessoa, recebe nome e idade como parâmetros
    constructor(nome, idade) {
        this.nome = nome; // Atributo para armazenar o nome da pessoa
        this.idade = idade; // Atributo para armazenar a idade da pessoa
    }

    // Método toString para representação textual da pessoa
    toString() {
        return `Nome: ${this.nome}, Idade: ${this.idade}`; // Retorna uma string com o nome e idade da pessoa
    }
}

// Definição da classe Eleitor, que herda de Pessoa
class Eleitor extends Pessoa {
    // Construtor da classe Eleitor, recebe nome, idade e título de eleitor como parâmetros
    constructor(nome, idade, tituloEleitor) {
        super(nome, idade); // Chama o construtor da classe pai com o nome e idade
        this.tituloEleitor = tituloEleitor; // Atributo para armazenar o título de eleitor do eleitor
    }

    // Método toString para representação textual do eleitor
    toString() {
        // Retorna uma string com as informações da pessoa (nome e idade) e o título de eleitor
        return `${super.toString()}, Título de Eleitor: ${this.tituloEleitor}`;
    }
}

// Definição da classe Candidato, que herda de Pessoa
class Candidato extends Pessoa {
    // Construtor da classe Candidato, recebe nome, idade, número do candidato e partido como parâmetros
    constructor(nome, idade, numeroCandidato, partido) {
        super(nome, idade); // Chama o construtor da classe pai com o nome e idade
        this.numeroCandidato = numeroCandidato; // Atributo para armazenar o número do candidato
        this.partido = partido; // Atributo para armazenar o partido do candidato
    }

    // Método toString para representação textual do candidato
    toString() {
        // Retorna uma string com as informações da pessoa (nome e idade), número do candidato e partido
        return `${super.toString()}, Número do Candidato: ${this.numeroCandidato}, Partido: ${this.partido}`;
    }
}

// Exemplo de uso:
let eleitor1 = new Eleitor("João", 35, "123456"); // Cria um objeto Eleitor
let candidato1 = new Candidato("Bagre", 45, "37", "Partido PEU"); // Cria um objeto Candidato

console.log("Informações do Eleitor:"); // Log para indicar informações do eleitor
console.log(eleitor1.toString()); // Log das informações do eleitor

console.log("\nInformações do Candidato:"); // Log para indicar informações do candidato
console.log(candidato1.toString()); // Log das informações do candidato
