function exportarJSON() {
    // Obtém os dados da tabela
    const tabela = document.getElementById('tabela-cadastros');
    const dados = [];

    // Itera sobre as linhas da tabela
    for (let i = 1; i < tabela.rows.length; i++) {
        const linha = tabela.rows[i];
        // Extrai os dados de cada célula (coluna) da linha atual
        const codigo = linha.cells[0].textContent; // Obtém o código da empresa
        const razaoSocial = linha.cells[1].textContent; // Obtém a razão social da empresa
        const nomeContato = linha.cells[2].textContent; // Obtém o nome do contato
        const telefone = linha.cells[3].textContent; // Obtém o telefone
        const email = linha.cells[4].textContent; // Obtém o email
        const estado = linha.cells[5].textContent; // Obtém o estado
        const cidade = linha.cells[6].textContent; // Obtém a cidade
        const endereco = linha.cells[7].textContent; // Obtém o endereço
        const bairro = linha.cells[8].textContent; // Obtém o bairro
        const numero = linha.cells[9].textContent; // Obtém o número
        const ddd = linha.cells[10].textContent; // Obtém o DDD do telefone

        // Cria um objeto com os dados da linha e adiciona ao array
        dados.push({
            codigo: codigo,
            razaoSocial: razaoSocial,
            nomeContato: nomeContato,
            telefone: telefone,
            email: email,
            estado: estado,
            cidade: cidade,
            endereco: endereco,
            bairro: bairro,
            numero: numero,
            ddd: ddd
        });
    }



    // Converte o array de dados para JSON
    const jsonData = JSON.stringify(dados, null, 2);

    // Cria um elemento <a> para fazer o download do JSON
    const downloadLink = document.createElement('a');
    downloadLink.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(jsonData));
    downloadLink.setAttribute('download', 'dados_cadastrados.json');
    downloadLink.style.display = 'none';
    
    // Adiciona o elemento <a> ao corpo do documento e simula um clique para iniciar o download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}