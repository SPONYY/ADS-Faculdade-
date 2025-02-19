var inputProduto    = document.getElementById("produto");
var selectCategoria = document.getElementById("categoria");
var inputPreco      = document.getElementById("preco");
var tabela          = document.getElementById("table");

var linhas = [];
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

	linhas[total] = linha;
	total++;

	tabela.innerHTML = criaTabela();
}

function criaTabela() {
	let part1 = `
		<table>
        <caption>Lista de Produtos Disponíveis</caption>
        <thead>
            <tr>
                <th>Produto</th>
                <th>Categoria</th>
                <th>Preço</th>
            </tr>
        </thead>
        <tbody>`

	let part2 = `
		</tbody>
        <tfoot>
            <tr>
                <td colspan="2">Total de produtos:</td>
                <td>`+total+`</td>
            </tr>
        </tfoot>
    </table>`


	return part1 + linhas.join(' ') + part2;

	
}
