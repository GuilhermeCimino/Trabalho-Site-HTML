// Obtém o elemento HTML com o ID 'saudacao'
const saudacaoDiv = document.getElementById('saudacao');

// Obtém a hora atual
const agora = new Date();
const hora = agora.getHours();

// Usa operador ternário para determinar a mensagem com base na hora do dia
const mensagem = hora < 12 ? 'Bom dia!' : hora < 18 ? 'Boa tarde!' : 'Boa noite!';

// Define o texto da saudação com base na mensagem determinada pelo operador ternário
saudacaoDiv.textContent = mensagem;
