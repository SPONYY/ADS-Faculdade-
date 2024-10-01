<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tarefa 03-09</title>
</head>
<body>
    <h1>Calculando salários</h1>
    <?php
    $nome = "João da Silva";
    $matricula = 1234;
    $cargo = "Estagiário";
    $departamento = "Tecnologia da Informação";
    $salario = 2500;

    echo "Nome: ", $nome;
    echo "</br>";
    echo "Matrícula: ", $matricula;
    echo "</br>";
    echo "Cargo: ", $cargo;
    echo "</br>";
    echo "Departamento: ", $departamento;
    echo "</br>";
    echo "Salário bruto: ", $salario;
    echo "</br>";

    define("desconto_inss", $salario * 0.11);
    define("desconto_va", 300);
    define("desconto_vt", 200);
    define("desconto_saude", 100);

    if ($salario <= 2500) {
        define("imposto_de_renda", $salario * 0.075);
    } elseif ($salario <= 5000) {
        define ("imposto_de_renda", $salario * 0.115);
    } else {
        define ("imposto_de_renda", $salario * 0.275);
    }

    if ($salario <= 3000) {
        define("prev_privada", 250);
    } elseif ($salario <= 7000) {
        define("prev_privada", 500);
    } else {
        define("prev_privada", 1000);
    }

    $descontos_totais = desconto_inss + desconto_va + desconto_vt + desconto_saude + imposto_de_renda + prev_privada;

    define("valor_hora", $salario/220);

    $hora_extra = valor_hora * 15;

    $salario_final = $salario - $descontos_totais + $hora_extra;

    echo "Salário líquido: ", round($salario_final, 2);
    echo "</br>";
    echo "Contribuição previdência privada (funcionário): R$", prev_privada;
    echo "</br>";
    echo "Contribuição previdência privada (empresa): R$", prev_privada;
    echo "</br>";
    echo "Total adicionado à conta de previdência privada: R$", prev_privada * 2;
    ?>
</body>
</html>

