<?php


class animal{

    abstract public function locomover();

}

class mamifero extends animal {
    
    public function locomover(){
        echo "Mamiferos andam";
    }

}

class ave extends animal {
    
    public function locomover(){
        echo "Aves voam";
    }
}

mamifero->locomover();
ave->locomover();




?>