<?php
class areas{
    public $areaCuadrado;
    public $areaRectangulo;
    public $areaTriangulo;

    public function areaCu($ladoC){
        $ladoCuadrado = $ladoC;
        $this->areaCuadrado = $ladoCuadrado * $ladoCuadrado;
        return $this->areaCuadrado;
    }

    public function areaRec($baseR,$alturaR){
        $baseRectangulo = $baseR;
        $alturaRectangulo = $alturaR;
        $this->areaRectangulo = $baseRectangulo * $alturaRectangulo;
        return $this->areaRectangulo;
    }
    
    public function areaTri($baset,$alturat){
        $baseTriangulo = $baset;
        $alturaTriangulo = $alturat;
        $this->areaTriangulo = $baseTriangulo * $alturaTriangulo / 2;
        return $this->areaTriangulo
        ;
    }
}
?>