<?php

// 1. ARRAY SIMPLES (INDEXADO)

// Definindo um array simples com índices numéricos automáticos
$frutas = array("Maçã", "Banana", "Laranja");

// Acessando os elementos do array simples usando os índices numéricos
echo $frutas[0]; // Saída: Maçã
echo $frutas[1]; // Saída: Banana
echo $frutas[2]; // Saída: Laranja

// Nesse caso, os índices começam em 0, portanto, "Maçã" está no índice 0,
// "Banana" no índice 1, e assim por diante.


// 2. ARRAY ASSOCIATIVO

// Definindo um array associativo com chaves nomeadas
$idade = array(
    "Pedro" => 25,
    "Ana" => 30,
    "Carlos" => 35
);

// Acessando os elementos do array associativo usando as chaves nomeadas
echo $idade["Pedro"]; // Saída: 25
echo $idade["Ana"]; // Saída: 30
echo $idade["Carlos"]; // Saída: 35

// Ao invés de usar índices numéricos, cada valor no array é associado a uma chave.
// No exemplo acima, "Pedro" é a chave que armazena o valor 25, "Ana" armazena 30, etc.


// 3. ARRAY MULTIDIMENSIONAL

// Definindo um array multidimensional (um array contendo outros arrays)
$alunos = array(
    "Pedro" => array(
        "idade" => 25,
        "curso" => "Engenharia"
    ),
    "Ana" => array(
        "idade" => 30,
        "curso" => "Medicina"
    ),
    "Carlos" => array(
        "idade" => 35,
        "curso" => "Direito"
    )
);

// Acessando os elementos do array multidimensional
echo $alunos["Pedro"]["idade"]; // Saída: 25
echo $alunos["Ana"]["curso"]; // Saída: Medicina
echo $alunos["Carlos"]["idade"]; // Saída: 35

// No array multidimensional, cada aluno (Pedro, Ana, Carlos) tem um array associado
// contendo informações como idade e curso. Acessamos essas informações usando
// duas chaves, primeiro a chave do aluno, depois a chave do atributo (idade, curso).

?>

<?php
 
 //Variaveis

 $name = "Guilherme";
 $age = 20;
 echo $name; // Guilherme
 echo "</br>";
 echo $age; // 20

?>

<?php
 
//Constantes

 define("PHP", "Linguagem Open - Source");
 echo PHP; // Linguagem Open - Source

?>

<?php

//Comentar

echo "Oi, Eu serei visto na sua tela";
// Eu não! Sou apenas um comentário.
echo "Oi, Eu também serei visto por você";
# Já eu não serei!
echo "E eu aqui novamente na sua tela, rs";
 /* Eu não aparecerei na sua tela novamente
 pois sou um comentário */


?>

<?php

//Conversão

 $var = 100;
 $type_casting = (bool) $var; // torna – se booleano
 $type_casting = (int) $var; // torna – se inteiro
 $type_casting = (float) $var; // torna – se float
 $type_casting = (string) $var; // torna – se string
 $type_casting = (array) $var; // torna – se array
 echo $type_casting = (bool)$var; // 1
?>

<?php

//Operadores

$a = 3;
 $b = 3;
 $c = $a * $b; // resultado é 9
 $d = $a + $b; // resultado é 6
 $e = $c - $d; // resultado é 3

?>