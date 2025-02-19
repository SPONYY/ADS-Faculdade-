// Função assíncrona para carregar as cidades de um estado através de uma API
async function carregarCidades(uf) {
    // Obtém o elemento de seleção de cidade
    const cidadeSelect = document.getElementById('cidadeSelect');
    // Limpa as opções existentes no elemento de seleção de cidade
    cidadeSelect.innerHTML = '';

    try {
        // Obtém a lista de cidades do estado através de uma requisição assíncrona
        const resposta = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
        const cidades = await resposta.json();

        // Cria e adiciona uma opção vazia ao elemento de seleção de cidade
        const optionVazia = document.createElement('option');
        optionVazia.text = 'Selecione uma cidade';
        cidadeSelect.add(optionVazia);

        // Para cada cidade, cria e adiciona uma opção ao elemento de seleção de cidade
        cidades.forEach(cidade => {
            const optionCidade = document.createElement('option');
            optionCidade.value = cidade.nome; // Alterado para o nome da cidade
            optionCidade.text = cidade.nome;
            cidadeSelect.add(optionCidade);
        });
    } catch (error) {
        // Exibe um erro no console se houver algum problema ao carregar as cidades
        console.error('Erro ao carregar cidades:', error);
    }
}

// Adiciona todos os estados do Brasil ao select de estados
const estadoSelect = document.getElementById('estadoSelect');
const estadosBrasil = ['', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

// Para cada estado, cria e adiciona uma opção ao elemento de seleção de estado
estadosBrasil.forEach(estado => {
    const optionEstado = document.createElement('option');
    optionEstado.value = estado;
    optionEstado.text = estado;
    estadoSelect.add(optionEstado);
});