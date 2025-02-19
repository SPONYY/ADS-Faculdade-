var tabela = document.getElementById("tabela");

const nomes = [
    "Camiseta",
    "Calça Jeans",
    "Tênis",
    "Bolsa",
    "Relógio",
    "Óculos de Sol",
    "Jaqueta",
    "Sapato",
    "Shorts",
    "Colar"
  ];

function CriaTabela() {
    let linhas = "";

    for (let i = 0; i < nomes.length; i++) {
        linhas += "<tr><td>" + nomes[i] + "</td></tr>";
    }

    return "<table>" + linhas + "</table>";	
}

function MostraTabela() {
    tabela.innerHTML = CriaTabela();
}

