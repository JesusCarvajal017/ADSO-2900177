<?php
include('libreria/classNomina.php');
$nominaP = new nomina();
$diasT = 30;
$valorD = 80000;
$sueldoP = $nominaP->sueldo($diasT,$valorD);
$subsidioT = $nominaP->transporte($sueldoP);
$arlPersona = $nominaP->arl($sueldoP);
$saludPersona = $nominaP->salud($sueldoP);
$pensionPersona = $nominaP->pension($sueldoP);
$pagpTotal = $nominaP->totalPago($sueldoP);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>Sueldo: <?php echo $sueldoP ?> </div>
    <div>Subsidio de Transporte: <?php echo $subsidioT ?> </div>
    <div>Arl de Persona: <?php echo $arlPersona ?> </div>
    <div>Salud de Persona: <?php echo $saludPersona ?> </div>
    <div>Pensión de Persona: <?php echo $pensionPersona ?> </div>
    <div>Pensión de Persona: <?php echo $pagpTotal ?> </div>
</body>
</html>