// Define uma função que será chamada quando a janela é rolada
window.onscroll = function () { scrollar() };

// Obtém o elemento de cabeçalho pelo ID
let header = document.getElementById("myHeader");

// Obtém a posição inicial do cabeçalho em relação ao topo da página
let sticky = header.offsetTop;

// Função para controlar o comportamento do cabeçalho enquanto a página é rolada
function scrollar() {
    // Verifica se a posição de rolagem da página é maior que a posição inicial do cabeçalho
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky"); // Adiciona a classe "sticky" ao cabeçalho quando a página é rolada para baixo
    }
    // Se a posição de rolagem for menor ou igual à posição inicial do cabeçalho
    else {
        header.classList.remove("sticky"); // Remove a classe "sticky" do cabeçalho
    }
}

// Aqui poderiam ser adicionados mais comentários para explicar a lógica por trás do uso de if e else
// Eles são utilizados para determinar se a classe "sticky" deve ser adicionada ou removida do cabeçalho, dependendo da posição de rolagem da página.
// Se a posição de rolagem for maior que a posição inicial do cabeçalho, a classe "sticky" é adicionada para fixar o cabeçalho no topo da página.
// Caso contrário, a classe "sticky" é removida para restaurar o comportamento padrão do cabeçalho.
