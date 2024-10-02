<?php
class operacion{
    
    public $numeroUno = 4;
    public $numeroDos = 6;
    public $suma;
    public $resta;
    public $multiplicacion;
    public $division;

    public function suma(){
        $this->numeroUno;
        $this->numeroDos;
        $this->suma = $this->numeroUno + $this->numeroDos;
        return $this->suma;
    }

    public function resta(){
        $this->numeroUno;
        $this->numeroDos;
        $this->resta = $this->numeroUno - $this->numeroDos;
        return $this->resta;
    }

    public function multiplicacion(){
        $this->numeroUno;
        $this->numeroDos;
        $this->multiplicacion = $this->numeroUno * $this->numeroDos;
        return $this->multiplicacion;
    }

    public function division(){
        $this->numeroUno;
        $this->numeroDos;
        $this->division = $this->numeroUno / $this->numeroDos;
        return $this->division;
    }
}
?>