// Variável para armazenar o total de cadastros
var total = 0;
    
// Função para salvar o cadastro
function salvar() {
    // Obtém os valores dos campos do formulário
    const codigo = document.getElementById('codInstituicao').value;
    const razaoSocial = document.getElementById('razaoSocial').value;
    const nomeContato = document.getElementById('nomeContato').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const estado = document.getElementById('estadoSelect').value;
    const cidade = document.getElementById('cidadeSelect').value;
    const endereco = document.getElementById('logradouro').value;
    const bairro = document.getElementById('bairro').value;
    const numeroEndereco = document.getElementById('numero-endereco').value;
    const ddd = document.getElementById('ddd').value;

    // Obtém a tabela onde os cadastros são exibidos
    const tabela = document.getElementById('corpo-da-tabela');
    // Insere uma nova linha na tabela
    const linha = tabela.insertRow();
    // Insere células na nova linha para cada dado do cadastro
    const celulaCodigo = linha.insertCell();
    const celulaRazaoSocial = linha.insertCell();
    const celulaNomeContato = linha.insertCell();
    const celulaTelefone = linha.insertCell();
    const celulaEmail = linha.insertCell();
    const celulaEstado = linha.insertCell();
    const celulaCidade = linha.insertCell();
    const celulaendereco = linha.insertCell();
    const celulaBairro = linha.insertCell();
    const celulaNumero = linha.insertCell();
    const celulaDDD = linha.insertCell();

    // Preenche as células com os valores dos campos do formulário
    celulaCodigo.textContent = codigo;
    celulaRazaoSocial.textContent = razaoSocial;
    celulaNomeContato.textContent = nomeContato;
    celulaTelefone.textContent = telefone;
    celulaEmail.textContent = email;
    celulaEstado.textContent = estado;
    celulaCidade.textContent = cidade; // Mantido o nome da cidade
    celulaendereco.textContent = endereco;
    celulaBairro.textContent = bairro;
    celulaNumero.textContent = numeroEndereco;
    celulaDDD.textContent = ddd;

    // Incrementa o contador de cadastros
    total++;
    // Atualiza o total de cadastros exibido
    document.getElementById('total').textContent = total;

    // Reseta o formulário após salvar o cadastro
    document.getElementById('cadastroForm').reset();
}