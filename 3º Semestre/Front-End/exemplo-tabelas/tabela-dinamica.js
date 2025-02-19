var par_tabela = document.getElementById("par-tabela");

function CriaTabela() {
    let linhas = "";

    for(let i=0; i<10; i++) {
        linhas += "<tr><td>" + i + "</td></tr>";
    }


    return "<table>" + linhas + "</table>";	
}

function MostraTabela() {
    par_tabela.innerHTML = CriaTabela();
}

