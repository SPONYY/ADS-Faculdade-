var inputProduto    = document.getElementById("produto");
var selectCategoria = document.getElementById("categoria");
var inputPreco      = document.getElementById("preco");
var corpo_tabela    = document.getElementById("corpo-da-tabela");
var celula_total    = document.getElementById("cell-total");

var total = 0;

function NovoProduto() {
	let produto   = inputProduto.value;
	let categoria = selectCategoria.value;
	let preco     = inputPreco.value;

	linha  = "<tr>"; 
	linha += "<td>" + produto   + "</td>"; 
	linha += "<td>" + categoria + "</td>"; 
	linha += "<td>" + preco     + "</td>"; 
	linha += "</tr>"; 

	total++;

	celula_total.innerHTML = total;

    const nova_tr = document.createElement('tr');
    nova_tr.innerHTML = linha; 
    corpo_tabela.appendChild(nova_tr);
}

