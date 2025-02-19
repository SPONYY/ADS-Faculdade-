const parInfo = document.getElementById('parInfo'); // Obtém o elemento HTML com o ID 'parInfo' e armazena na variável parInfo
const inputCEP = document.getElementById('inputCEP'); // Obtém o elemento HTML com o ID 'inputCEP' e armazena na variável inputCEP

async function printCEPData() { // Declaração de uma função assíncrona chamada printCEPData
    const cep = inputCEP.value; // Obtém o valor inserido no campo de entrada inputCEP e armazena na variável cep
    const url = `https://viacep.com.br/ws/${cep}/json/`; // Cria a URL da API ViaCEP com o CEP inserido
    const resposta = await fetch(url); // Faz uma requisição à URL e aguarda a resposta
    const info = await resposta.json(); // Converte a resposta para o formato JSON e armazena na variável info

    // Limpa o conteúdo atual do parágrafo parInfo
    parInfo.innerHTML = '';

    // Verifica se o CEP é válido
    if (!info.erro) { // Se não houver erro na resposta da API

        // Adiciona as informações do CEP ao parágrafo parInfo
        parInfo.innerHTML += `Localidade: ${info.localidade}<br>`;
        parInfo.innerHTML += `UF: ${info.uf}<br>`;
        parInfo.innerHTML += `Logradouro: ${info.logradouro}<br>`;
        parInfo.innerHTML += `Bairro: ${info.bairro}<br>`;
        parInfo.innerHTML += `DDD: ${info.ddd}`;

    } else { // Se houver erro na resposta da API

        parInfo.innerHTML = 'CEP não encontrado.'; // Exibe uma mensagem indicando que o CEP não foi encontrado
        
    }
}
