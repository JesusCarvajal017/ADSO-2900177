<?php
include('librerias/operaciones.php');
include('librerias/controlOp.php');

$operaciones = new operaciones();
$control = new controlOperaciones();

$num1 = 4;
$num2 = 6;

$operaciones->setNumeroUno($num1);
$operaciones->setNumeroDos($num2);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div><?php echo $control->suma($operaciones->getNumeroUno(),$operaciones->getNumeroDos()); ?></div>
    <div><?php echo $control->resta($operaciones->getNumeroUno(),$operaciones->getNumeroDos()); ?></div>
    <div><?php echo $control->multiplicacion($operaciones->getNumeroUno(),$operaciones->getNumeroDos()); ?></div>
    <div><?php echo $control->division($operaciones->getNumeroUno(),$operaciones->getNumeroDos()); ?></div>
</body>
</html>