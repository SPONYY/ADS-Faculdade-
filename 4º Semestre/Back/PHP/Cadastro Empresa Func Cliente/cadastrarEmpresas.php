<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $razao_social = $_POST['razao_social'];
    $nome_fantasia = $_POST['nome_fantasia'];
    $cnpj = $_POST['cnpj'];
    $insc_estadual = $_POST['insc_estadual'];
    $insc_municipal = $_POST['insc_municipal'];
    $endereco = $_POST['endereco'];
    $cep = $_POST['cep'];
    $telefone = $_POST['telefone'];

    $strcon = mysqli_connect("localhost", "root", "", "hcm") or die("Erro ao conectar com o banco");

    $sql = "INSERT INTO empresa (razao_social, nome_fantasia, cnpj, insc_estadual, insc_municipal, endereco, cep, telefone) 
            VALUES ('$razao_social', '$nome_fantasia', '$cnpj', '$insc_estadual', '$insc_municipal', '$endereco', '$cep', '$telefone');";

    if (mysqli_query($strcon, $sql)) {
        echo "Empresa cadastrada com sucesso!";
    } else {
        echo "Erro ao tentar cadastrar registro: " . mysqli_error($strcon);
    }
    mysqli_close($strcon);
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de Empresa</title>
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
        <button onclick="location.href='cadastrarEmpresa.php'">Cadastro de Empresa</button>
    </header>
    
    <h2>Cadastro de Empresa</h2>
    <form action="empresa.php" method="POST">
        <label for="razao_social">Razão Social:</label>
        <input type="text" id="razao_social" name="razao_social" required><br><br>

        <label for="nome_fantasia">Nome Fantasia:</label>
        <input type="text" id="nome_fantasia" name="nome_fantasia" required><br><br>

        <label for="cnpj">CNPJ:</label>
        <input type="text" id="cnpj" name="cnpj" required><br><br>

        <label for="insc_estadual">Inscrição Estadual:</label>
        <input type="text" id="insc_estadual" name="insc_estadual" required><br><br>

        <label for="insc_municipal">Inscrição Municipal:</label>
        <input type="text" id="insc_municipal" name="insc_municipal" required><br><br>

        <label for="endereco">Endereço:</label>
        <input type="text" id="endereco" name="endereco" required><br><br>

        <label for="cep">CEP:</label>
        <input type="text" id="cep" name="cep" required><br><br>

        <label for="telefone">Telefone:</label>
        <input type="text" id="telefone" name="telefone" required><br><br>

        <input type="submit" value="Cadastrar Empresa">
    </form>
</body>
</html>
