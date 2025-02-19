<?php

class pai{

    $nome;
    $idade;

    public function calcularIdade($dtNascimento){

    $dataAtual = new DateTime();
    $nascimento = new DateTime($dataNascimento);
    $idade = $dataAtual->diff($nascimento)->y;
    
    return $idade;
}

};

class filha extends pai{

    public function nomeDoMetodo2(){

           
}

};

$dtNascimento = "2000-10-15";
$idade = calcularIdade($dtNascimento);
echo "Idade: " . $idade . " anos";


?>