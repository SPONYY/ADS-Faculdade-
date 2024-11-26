<?php


class Cliente{

    public $nome;

    public $id;
    
    public $cargo;

    public $setor;


    public function confirmarPagamento(){
        echo "<br/>Confirmado o pagamento";
    }
    
    public function pagarSalario($valor){
        echo "<br/>Foi pago o valor de R$ ".$valor;

    }
}


?>