// Adiciona um ouvinte de evento de mudança ao elemento com o ID 'switch'
document.getElementById('switch').addEventListener('change', function() {
    // Obtém o elemento com o ID 'ações'
    const candidatos = document.getElementById('ações');

    // Alterna a exibição do elemento 'ações' com base no estado do switch
    candidatos.style.display = this.checked ? 'block' : 'none'; // Se o switch estiver marcado, exibe o elemento 'ações', caso contrário, oculta
});
