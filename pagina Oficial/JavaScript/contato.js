// Função para validar o formulário
function validarFormulario() {
    // Obtém os valores dos campos do formulário e remove espaços em branco extras
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefone = document.getElementById("telefone").value.trim();

    // Obtém o botão de envio do formulário
    let botaoEnviar = document.getElementById("botaoEnviar");

    // Array contendo os valores dos campos
    let campos = [nome, email, telefone];
    let todosPreenchidos = true; // Define a flag como verdadeira inicialmente

    let i = 0;
    // Loop para verificar se todos os campos estão preenchidos
    while (i < campos.length) {
        // Se algum campo estiver vazio, define a flag como falsa e sai do loop
        if (campos[i] === "") {
            todosPreenchidos = false;
            break;
        }
        i++; // Incrementa o contador
    }

    // Define o estado do botão de envio com base na flag
    botaoEnviar.disabled = !todosPreenchidos;
}

// Função para iniciar a validação dos campos do formulário
function iniciarValidacao() {
    let campos = document.querySelectorAll("#formulario input"); // Seleciona todos os campos de entrada do formulário
    let todosPreenchidos;

    // Loop para verificar continuamente se todos os campos foram preenchidos
    do {
        todosPreenchidos = true;
        campos.forEach(campo => {
            if (campo.value.trim() === "") {
                todosPreenchidos = false;
            }
        });
        document.getElementById("botaoEnviar").disabled = !todosPreenchidos; // Define o estado do botão de envio
    } while (!todosPreenchidos); // Continua o loop até que todos os campos estejam preenchidos
}

// Configura para verificar a cada 500ms se os campos foram preenchidos
setInterval(validarFormulario, 500); // Verifica continuamente se os campos foram preenchidos e atualiza o estado do botão de envio

// Outra opção seria chamar a função iniciarValidacao para verificar continuamente usando do...while
// iniciarValidacao(); // Descomente essa linha para testar a função com do...while
