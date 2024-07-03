// Array de objetos representando candidatos
const candidatos = [
    { nome: "Bagre Da Silva", partido: "PEU", proposta: "Educação gratuita" },
    { nome: "Luiz Lula", partido: "PLT", proposta: "Saúde pública de qualidade" },
    { nome: "Tilápia Messias", partido: "PMI", proposta: "Emprego para todos" }
];

// Obtém o elemento HTML onde a lista de candidatos será exibida
const listaCandidatos = document.getElementById('lista-candidatos');

// Itera sobre o array de candidatos
candidatos.forEach(candidato => {
    // Cria um novo elemento <div> para cada candidato
    const divCandidato = document.createElement('div');
    
    // Define o conteúdo HTML da div com informações do candidato
    divCandidato.innerHTML = `<h2>${candidato.nome}</h2>
                              <p>Partido: ${candidato.partido}</p>
                              <p>Proposta: ${candidato.proposta}</p>`;
    
    // Adiciona a div do candidato ao elemento HTML pai
    listaCandidatos.appendChild(divCandidato);
});
