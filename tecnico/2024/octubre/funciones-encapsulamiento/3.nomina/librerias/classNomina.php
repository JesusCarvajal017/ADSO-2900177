<?php
class nominaPersona{
    private $diasTrabajados;
    private $valorDia;

    public function setDiasTrabajados($diasTrabajados){
        $this->diasTrabajados = $diasTrabajados;
    }
    public function getDiasTrabajados(){
        return $this->diasTrabajados;
    }
    public function setValorDia($valorDia){
        $this->valorDia = $valorDia;
    }
    public function getValorDia(){
        return $this->valorDia;
    }
}
?>