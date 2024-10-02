<?php
class nomina{
    private $diasTrabajados;
    private $valorDia;
    private $sueldo;
    private $salarioMinimo;
    private $subTrans;
    private $bonoP;
    private $arl;
    private $salud;
    private $pension;
    private $retencion;
    private $deducibles;
    private $totalP;
    private $arlP;
    private $saludP;
    private $valorDeducion;
    private $pensionP;

    public function __construct(valores $valor){
        $this->diasTrabajados = $valor->getDiasTrabajados();
        $this->valorDia = $valor->getValorDia();
        $this->salarioMinimo = 1300000;
        $this->arlP = 0.052;
        $this->saludP = 0.12;
        $this->pensionP = 0.16;
        $this->valorDeducion = 0.04;
    }
    public function sueldo(){
        $this->sueldo = $this->diasTrabajados * $this->valorDia;
        return $this->sueldo;
    }

    public function transporte(){
        if($this->sueldo <= $this->salarioMinimo * 2){
            $this->subTrans = 140000;
        }else{
            $this->subTrans = 0;
        }
        return $this->subTrans;
    }

    public function bono(){
        if($this->sueldo <= $this->salarioMinimo){
            $this->bonoP = 1000000;
        }else{
            $this->bonoP = 0;
        }
        return $this->bonoP;
    }

    public function reten(){
        if($this->sueldo >= $this->salarioMinimo * 4){
            $this->retencion = $this->sueldo  * $this->valorDeducion;
        }else{
            $this->retencion = 0;
        }
        return $this->retencion;
    }

    public function arl(){
        $this->arl = $this->sueldo * $this->arlP;
        return $this->arl;
    }

    public function salud(){
        $this->salud = $this->sueldo * $this->saludP;
        return $this->salud;
    }
    
    public function pension(){
        $this->pension = $this->sueldo * $this->pensionP;
        return $this->pension;
    }
    
    public function totalPago(){
        $this->deducibles = $this->arl() + $this->salud() + $this->pension() + $this->reten();
        $this->totalP = ($this->sueldo + $this->transporte() + $this->bono()) - ($this->deducibles) ;
        return $this->totalP;
    }
}
?>