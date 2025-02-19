<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Questão 2</title>
</head>
<body>
    
</body>

<?php

$salarios = array(
    "Janeiro" => 2500.00,
    "Fevereiro" => 2800.00,
    "Março" => 3000.00
);

$maiorRemuneracao = 0;
$mesMaiorRemuneracao = "";

foreach ($salarios as $mes => $remuneracao) {
    echo "Mês: " . $mes . " - Salário: R$ " . number_format($remuneracao, 2, ',', '.') . "<br>";

    if ($remuneracao > $maiorRemuneracao) {
        $maiorRemuneracao = $remuneracao;
        $mesMaiorRemuneracao = $mes;
    }
}

echo "<br>O mês com a maior remuneração foi: " . $mesMaiorRemuneracao . " - Salário: R$ " . number_format($maiorRemuneracao, 2, ',', '.');
?>


</html>