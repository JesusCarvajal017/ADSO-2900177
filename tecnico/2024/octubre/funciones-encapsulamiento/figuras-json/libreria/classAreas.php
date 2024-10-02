<?php
class areas{
    public $ladoCuadrado;
    public $baseRectangulo;
    public $alturaRectangulo;
    public $baseTriangulo;
    public $alturaTriangulo;
    public $areaCuadrado;
    public $areaRectangulo;
    public $areaTriangulo;

    public function __construct(areaFigura $datos){
        $this->ladoCuadrado = $datos->getLadoCuadrado();
        $this->baseRectangulo = $datos->getBaseRectangulo();
        $this->alturaRectangulo = $datos->getAlturaRectangulo();
        $this->baseTriangulo = $datos->getBaseTriangulo();
        $this->alturaTriangulo = $datos->getAlturaTriangulo();
    }

    public function areaCu(){
        $this->areaCuadrado = $this->ladoCuadrado * $this->ladoCuadrado;
        return $this->areaCuadrado;
    }

    public function areaRec(){
        $this->areaRectangulo = $this->baseRectangulo * $this->alturaRectangulo;
        return $this->areaRectangulo;
    }
    
    public function areaTri(){
        $this->areaTriangulo = $this->baseTriangulo * $this->alturaTriangulo / 2;
        return $this->areaTriangulo
        ;
    }
}
?>