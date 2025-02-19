// Função assíncrona para buscar e exibir dados do CEP
async function printCEPData() {
    // Obtém o elemento de entrada do CEP
    const inputCEP = document.getElementById('inputCEP');
    // Obtém informações do CEP usando uma função assíncrona
    const info = await obterInfoCEP(inputCEP.value);

    // Verifica se as informações foram obtidas com sucesso e se não há erro
    if (info && !info.erro) {
        // Preenche os campos de logradouro, bairro e DDD com as informações obtidas
        document.getElementById('logradouro').value = info.logradouro;
        document.getElementById('bairro').value = info.bairro;
        document.getElementById('ddd').value = info.ddd;

        // Obtém o elemento de seleção de estado
        const estadoSelect = document.getElementById('estadoSelect');
        // Define o valor do elemento de seleção de estado com o estado obtido
        estadoSelect.value = info.uf;

        // Carrega as cidades do estado obtido
        await carregarCidades(info.uf);

        // Obtém o elemento de seleção de cidade
        const cidadeSelect = document.getElementById('cidadeSelect');
        // Define o valor do elemento de seleção de cidade com a cidade obtida
        cidadeSelect.value = info.localidade;

    } else {
        // Exibe um alerta se o CEP não for encontrado
        alert('CEP não encontrado.');
    }
}

// Função assíncrona para obter informações do CEP através de uma API
async function obterInfoCEP(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const resposta = await fetch(url);
    return resposta.json();
}