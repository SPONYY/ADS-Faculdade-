<?php

    $server = "localhost";
    $usuario = "root";
    $senha = "";
    $banco = "hcm";
    
    $mysqli = new mysqli($server, $usuario, $senha, $banco);

    if ($mysqli->connect_error) {
        die("Falha na conexão: " . $mysqli->connect_error);
    }
    
    try {
        $conn = new PDO("mysql:host=$server;dbname=" . $banco, $usuario, $senha);

        echo "Conexão OK!";
    } catch (PDOException $err) {
        echo "Erro: ". $err->getMessage();
    }
   
?> 