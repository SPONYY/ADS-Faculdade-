<?php

include("func-class.php");


$tempcliente = new Cliente();
$tempcliente->nome = "Zé da manga";
$tempcliente->id = 123;
$tempcliente->cargo = "Gerente";
$tempcliente->setor = "Financeiro";

$tempcliente->confirmarPagamento();

$tempcliente->pagarSalario(3000, $tempcliente->id, $tempcliente->cargo, $tempcliente->nome);

echo "<br/>Nome do Cliente: ".$tempcliente->nome;
echo "<br/>ID: ".$tempcliente->id;
echo "<br/>Cargo: ".$tempcliente->cargo;
echo "<br/>Setor: ".$tempcliente->setor;

?>
