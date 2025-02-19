<?php

$razao_social = $_POST['razao_social'];
$nome_fantasia = $_POST['nome_fantasia'];
$cnpj = $_POST['cnpj'];
$insc_estadual = $_POST['insc_estadual'];
$insc_municipal = $_POST['insc_municipal'];

$strcon = mysqli_connect("localhost", "root", "", "hcm") or die("Erro ao conectar com o banco");

$sql = "INSERT INTO empresas (razao_social, nome_fantasia, cnpj, insc_estadual, insc_municipal) 
        VALUES ('$razao_social', '$nome_fantasia', '$cnpj', '$insc_estadual', '$insc_municipal');";

if (mysqli_query($strcon, $sql)) {
    echo "Empresa cadastrada com sucesso!";
} else {
    echo "Erro ao tentar cadastrar registro: " . mysqli_error($strcon);
}

mysqli_close($strcon);

?>