<?php
include_once 'pessoa.php'; 

class Funcionario extends Pessoa {
    private $matricula;
    private $cargo;
    private $setor;
    private $lotacao;
    private $remuneracao;
    private $dt_inicio_contrato;

    public function __construct($matricula, $nome, $cargo, $setor, $lotacao, $remuneracao, $dt_inicio_contrato, $endereco, $cep, $telefone, $cpf, $rg, $pis, $dt_nascimento, $nacionalidade, $genero) {
        parent::__construct($nome, $endereco, $cep, $telefone, $cpf, $rg, $pis, $dt_nascimento, $nacionalidade, $genero);
        $this->matricula = $matricula;
        $this->cargo = $cargo;
        $this->setor = $setor;
        $this->lotacao = $lotacao;
        $this->remuneracao = $remuneracao;
        $this->dt_inicio_contrato = $dt_inicio_contrato;
    }

    public function salvarFuncionario($strcon) {

        $this->salvarPessoa($strcon);

        $sql = "INSERT INTO funcionarios (matricula, nome, cargo, setor, lotacao, remuneracao, dt_inicio_contrato) 
                VALUES ('$this->matricula', '$this->nome', '$this->cargo', '$this->setor', '$this->lotacao', '$this->remuneracao', '$this->dt_inicio_contrato');";
        
        if (mysqli_query($strcon, $sql)) {
            echo "Funcionário cadastrado com sucesso!";
        } else {
            echo "Erro ao tentar cadastrar funcionário: " . mysqli_error($strcon);
        }
    }
}
?>
