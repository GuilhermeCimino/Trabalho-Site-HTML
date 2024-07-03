// Função para salvar os dados do formulário no Local Storage
function enviarFormulario() {
    // Obtém os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    // Salva os dados no Local Storage
    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);
    localStorage.setItem('telefone', telefone);

    // Alerta o usuário que os dados foram salvos
    alert('Dados e proposta salvos!');
}

// Função para preencher o formulário com os dados do Local Storage
function preencherFormulario() {
    // Obtém os dados salvos do Local Storage
    const nome = localStorage.getItem('nome');
    const email = localStorage.getItem('email');
    const telefone = localStorage.getItem('telefone');

    // Preenche os campos do formulário com os dados salvos, se existirem
    if (nome) {
        document.getElementById('nome').value = nome;
    }
    if (email) {
        document.getElementById('email').value = email;
    }
    if (telefone) {
        document.getElementById('telefone').value = telefone;
    }
}

// Função para apagar os dados do formulário
function removerDados() {
    localStorage.clear(); // Limpa todos os dados salvos no Local Storage
    // Alerta o usuário que os dados foram removidos
    alert('Dados e proposta removidos!');
}

// Função para preencher o formulário com os dados salvos ao carregar a página
window.onload = preencherFormulario;




