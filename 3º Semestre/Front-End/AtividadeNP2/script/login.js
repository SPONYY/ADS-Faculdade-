// Criação de Constantes
const entrarbtn = document.getElementById('entrar');
const valorusuario = document.getElementById('login');
const senha = document.getElementById("senha");
const cadastro = document.getElementById("registrar")



// Adicionar eventos de botão
entrarbtn.addEventListener('click', function() {
    if (valorusuario.value === "" || senha.value === "" ) {
       alert("Por favor preencha o formulário adequadamente.");
    }
});

// Função para o redirecionamento para a home page
function logar(){
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if(login == "Alfredo13" && senha == "123457"){
        alert("Sucesso!")
        alert('Redirecionando...');
        window.location.href = "index.html";
    }
    else{
        alert("Usuário ou senha incorretos!");
    }

    
}

// Função de redirecionamento para a página de Cadastro 

function Cadastrar(){

cadastro.addEventListener('click',function(){
    alert('Redirecionando...');
window.location.href = "fupCadastroClienteFornecedor.html";

})

}