<?php
class nomina{
    public $sueldo;
    public $salarioMinimo;
    public $subTrans;
    public $bonoP;
    public $arl;
    public $salud;
    public $pension;
    public $retencion;
    public $deducibles;
    public $totalP;
    public $arlP;
    public $saludP;
    public $valorDeducion;
    public $pensionP;

    public function __construct(){
        $this->salarioMinimo = 1300000;
        $this->arlP = 0.052;
        $this->saludP = 0.12;
        $this->pensionP = 0.16;
        $this->valorDeducion = 0.04;
    }
    public function sueldo($diasTrabajadosP,$valorDiaP){
        $diasTrabajados = $diasTrabajadosP;
        $valorDia = $valorDiaP;
        $this->sueldo = $diasTrabajados * $valorDia;
        return $this->sueldo;
    }

    public function transporte($sueldoP){
        $sueldo = $sueldoP;
        if($sueldo <= $this->salarioMinimo * 2){
            $this->subTrans = 140000;
        }else{
            $this->subTrans = 0;
        }
        return $this->subTrans;
    }

    public function bono($sueldoP){
        $sueldo = $sueldoP;
        if($sueldo <= $this->salarioMinimo){
            $this->bonoP = 1000000;
        }else{
            $this->bonoP = 0;
        }
        return $this->bonoP;
    }

    public function reten($sueldoP){
        $sueldo = $sueldoP;
        if($sueldo >= $this->salarioMinimo * 4){
            $this->retencion = $sueldo * $this->valorDeducion;
        }else{
            $this->retencion = 0;
        }
        return $this->retencion;
    }

    public function arl($sueldoP){
        $sueldo = $sueldoP;
        $this->arl = $sueldo * $this->arlP;
        return $this->arl;
    }

    public function salud($sueldoP){
        $sueldo = $sueldoP;
        $this->salud = $sueldo * $this->saludP;
        return $this->salud;
    }
    
    public function pension($sueldoP){
        $sueldo = $sueldoP;
        $this->pension = $sueldo * $this->pensionP;
        return $this->pension;
    }
    
    public function totalPago($sueldoP){
        $sueldo = $sueldoP;
        $this->deducibles = $this->arl($sueldo) + $this->salud($sueldo) + $this->pension($sueldo) + $this->reten($sueldo);
        $this->totalP = ($sueldo + $this->transporte($sueldo) + $this->bono($sueldo)) - ($this->deducibles) ;
        return $this->totalP;
    }
}
?>