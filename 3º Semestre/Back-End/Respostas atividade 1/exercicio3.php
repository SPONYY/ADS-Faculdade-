<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Média</title>
</head>

<style>

    body{
        margin: 0;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    header{

        width: 100%;
        height: 8vh;
        border-bottom: solid 1px black;
        text-align: center;

    }

    .formulario{

        display: flex;
        justify-content: center;
        margin: 200px;    
        border: solid 2px rgb(103, 103, 103);
        border-radius: 16px;
        width: fit-content;
        height: fit-content;
        padding: 16px;
        -webkit-box-shadow: 1px 3px 16px 3px #000000; 
        box-shadow: 1px 3px 16px 3px #000000;
        align-items: center;
        font-size: 20px;

    }

    .formButton{
        border: solid 1px black;
        width: 160px;
        height: 32px;
        border-radius: 8px;
        margin-top: 16px;
        background-color: #000000;
        color: whitesmoke;
        font-size: 16px;
        
        
    }

    input{
        margin-top: 8px;
        margin-bottom: 8px;
        border-radius: 4px;
        height: 24px;
        width: 160px;
    }

</style>

<body>
    

    <main>
    
        <div class= "formulario">
            <form method="post" action="">
                <h3>Soma</h3>
                <label for="nota1">Valor 1:</label> <br>
                <input type="number" id="nota1" name="nota1" required>
                <br>
                <label for="nota2">Valor 2:</label> <br>
                <input type="number" id="nota2" name="nota2" required>
                <br>
                <h3>Multiplicação</h3>
                <label for="nota3">Valor 3:</label> <br>
                <input type="number" id="nota3" name="nota3" required>
                <br>
                <label for="nota4">Valor 4:</label> <br>
                <input type="number" id="nota4" name="nota4" required>
                <br>

                <button class="formButton" type="submit" name="calcular">Calcular</button>
            
            </form>
        </div>

    </main>

    <?php
    
    if(isset($_POST['calcular'])) {
        
        $nota1 = $_POST['nota1'];
        $nota2 = $_POST['nota2'];
        $nota3 = $_POST['nota3'];
        $nota4 = $_POST['nota4'];

        $soma = ($nota1 + $nota3);

        $multiplicacao = ($nota2 * $nota4);

        echo "<h3>A soma dos valores 1 e 2 é =  $soma</h3>";
        echo "  ----------------------   ";
        echo "<h3>A multiplicação do valores 3 e 4 é =  $multiplicacao</h3>";
    }
    ?>
</body>
</html>
