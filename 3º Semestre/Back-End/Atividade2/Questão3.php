<?php

$nota1 = 7.5;
$nota2 = 6.8;
$nota3 = 5.0;
$nota4 = 8.2;

$media = ($nota1 + $nota2 + $nota3 + $nota4) / 4;

if ($media >= 6.0) {
    echo "Média: " . number_format($media, 2) . " - Aprovado";
} else {
    echo "Média: " . number_format($media, 2) . " - Reprovado";
}

?>

