<?php
class valores{
    private $diasTrabajados;
    private $valorDia;

    public function __construct($diasTrabajados,$valorDia){
        $this->diasTrabajados = $diasTrabajados;
        $this->valorDia = $valorDia;
    }

    public function setDiasTrabajados(){
        $this->diasTrabajados;
    }
    public function getDiasTrabajados(){
        return $this->diasTrabajados;
    }
    public function setValorDia(){
        $this->valorDia;
    }
    public function getValorDia(){
        return $this->valorDia;
    }
}
?>