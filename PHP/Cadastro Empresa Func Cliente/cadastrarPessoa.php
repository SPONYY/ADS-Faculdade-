<?php

include_once 'Pessoa.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $nome = $_POST['nome'];
    $endereco = $_POST['endereco'];
    $cep = $_POST['cep'];
    $telefone = $_POST['telefone'];
    $cpf = $_POST['cpf'];
    $rg = $_POST['rg'];
    $pis = $_POST['pis'];
    $dt_nascimento = $_POST['dt_nascimento'];
    $nacionalidade = $_POST['nacionalidade'];
    $genero = $_POST['genero'];
    $strcon = mysqli_connect("localhost", "root", "", "hcm") or die("Erro ao conectar com o banco");

    
    $pessoa = new Pessoa($nome, $endereco, $cep, $telefone, $cpf, $rg, $pis, $dt_nascimento, $nacionalidade, $genero);

    
    $pessoa->salvarPessoa($strcon);

    
    mysqli_close($strcon);

    
    echo "Pessoa cadastrada com sucesso!";
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de Pessoa</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
        }

        h2, h3 {
            text-align: center;
            margin-bottom: 16px;
        }

        header {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
        }

        header button {
            padding: 10px 20px;
            border: none;
            background-color: #4CAF50;
            color: white;
            cursor: pointer;
            border-radius: 5px;
        }

        header button:hover {
            background-color: #45a049;
        }

        form {
            padding: 24px;
            border-radius: 12px;
            border: 1px solid black;
            background-color: #f8f8f8;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
    </style>
</head>
<body>
    <header>
        <button onclick="location.href='cadastrarPessoa.php'">Cadastro de Pessoa</button>
        <button onclick="location.href='cadastrarFuncionario.php'">Cadastro de Funcionário</button>
        <button onclick="location.href='cadastrarEmpresas.php'">Cadastro de Empresa</button>
    </header>
    
    <h2>Cadastro de Pessoa</h2>
    <form action="cadastrarPessoa.php" method="POST">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required><br><br>

        <label for="endereco">Endereço:</label>
        <input type="text" id="endereco" name="endereco" required><br><br>

        <label for="cep">CEP:</label>
        <input type="text" id="cep" name="cep" required><br><br>

        <label for="telefone">Telefone:</label>
        <input type="text" id="telefone" name="telefone" required><br><br>

        <label for="cpf">CPF:</label>
        <input type="text" id="cpf" name="cpf" required><br><br>

        <label for="rg">RG:</label>
        <input type="text" id="rg" name="rg" required><br><br>

        <label for="pis">PIS:</label>
        <input type="text" id="pis" name="pis" required><br><br>

        <label for="dt_nascimento">Data de Nascimento:</label>
        <input type="date" id="dt_nascimento" name="dt_nascimento" required><br><br>

        <label for="nacionalidade">Nacionalidade:</label>
        <input type="text" id="nacionalidade" name="nacionalidade" required><br><br>

        <label for="genero">Gênero:</label>
        <input type="text" id="genero" name="genero" required><br><br>

        <input type="submit" value="Cadastrar Pessoa">
    </form>
</body>
</html>
