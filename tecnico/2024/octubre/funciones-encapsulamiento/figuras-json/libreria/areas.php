<?php
class areaFigura{

    private $ladoCuadrado;
    private $baseRectangulo;
    private $alturaRectangulo;
    private $alturaTriangulo;
    private $baseTriangulo;
    public function __construct($ladoc, $baseRec, $alturaRec, $baseTri, $alturaTri){
        $this->ladoCuadrado = $ladoc;
        $this->baseRectangulo = $baseRec;
        $this->alturaRectangulo = $alturaRec;
        $this->baseTriangulo = $baseTri;
        $this->alturaTriangulo = $alturaTri;
    }

    public function setLadoCuadrado(){
        $this->ladoCuadrado;
    }
    public function getLadoCuadrado(){
        return $this->ladoCuadrado;
    }
    
    public function setBaseRectangulo(){
        $this->baseRectangulo;
    }
    public function getBaseRectangulo(){
        return $this->baseRectangulo;
    }

    public function setAlturaRectangulo(){
        $this->alturaRectangulo;
    }
    public function getAlturaRectangulo(){
        return $this->alturaRectangulo;
    }

    public function setBaseTriangulo(){
        $this->baseTriangulo;
    }
    public function getBaseTriangulo(){
        return $this->baseTriangulo;
    }

    public function setAlturaTriangulo(){
        $this->alturaTriangulo;
    }
    public function getAlturaTriangulo(){
        return $this->alturaTriangulo;
    }
}