<?php
class Pessoa {
    protected $nome;
    protected $endereco;
    protected $cep;
    protected $telefone;
    protected $cpf;
    protected $rg;
    protected $pis;
    protected $dt_nascimento;
    protected $nacionalidade;
    protected $genero;

    public function __construct($nome, $endereco, $cep, $telefone, $cpf, $rg, $pis, $dt_nascimento, $nacionalidade, $genero) {
        $this->nome = $nome;
        $this->endereco = $endereco;
        $this->cep = $cep;
        $this->telefone = $telefone;
        $this->cpf = $cpf;
        $this->rg = $rg;
        $this->pis = $pis;
        $this->dt_nascimento = $dt_nascimento;
        $this->nacionalidade = $nacionalidade;
        $this->genero = $genero;
    }

    public function salvarPessoa($strcon) {
        $sql = "INSERT INTO pessoas (nome, endereco, cep, telefone, cpf, rg, pis, dt_nascimento, nacionalidade, genero) 
                VALUES ('$this->nome', '$this->endereco', '$this->cep', '$this->telefone', '$this->cpf', '$this->rg', '$this->pis', '$this->dt_nascimento', '$this->nacionalidade', '$this->genero');";
        
        if (mysqli_query($strcon, $sql)) {
            echo "Pessoa cadastrada com sucesso!";
        } else {
            echo "Erro ao tentar cadastrar registro: " . mysqli_error($strcon);
        }
    }
}
?>
