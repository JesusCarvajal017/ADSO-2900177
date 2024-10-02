<?php
class controlOperaciones{
    private $numeroUno;
    private $numeroDos;
    private $suma;
    private $resta;
    private $multiplicacion;
    private $division;

    public function suma($numeroUno,$numeroDos){
        $this->numeroUno = $numeroUno;
        $this->numeroDos = $numeroDos;
        $this->suma = $this->numeroUno + $this->numeroDos;
        return $this->suma;
    }
    public function resta($numeroUno,$numeroDos){
        $this->numeroUno = $numeroUno;
        $this->numeroDos = $numeroDos;
        $this->resta = $this->numeroUno - $this->numeroDos;
        return $this->resta;
    }
    public function multiplicacion($numeroUno,$numeroDos){
        $this->numeroUno = $numeroUno;
        $this->numeroDos = $numeroDos;
        $this->multiplicacion = $this->numeroUno * $this->numeroDos;
        return $this->multiplicacion;
    }
    public function division($numeroUno,$numeroDos){
        $this->numeroUno = $numeroUno;
        $this->numeroDos = $numeroDos; 
        $this->division = $this->numeroUno / $this->numeroDos;
        return $this->division;
    }
}
?>