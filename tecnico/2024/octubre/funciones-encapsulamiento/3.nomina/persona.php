<?php
include('librerias/classNomina.php');
include('librerias/nominaP.php');

$nomina = new nomina();
$nominaPerson = new nominaPersona();

$diasT = $_POST['txtDiasT'];
$valorD = $_POST['txtValorD'];

$nominaPerson->setDiasTrabajados($diasT);
$nominaPerson->setValorDia($valorD);

$sueldo = $nomina->sueldo($nominaPerson->getDiasTrabajados(), $nominaPerson->getValorDia());
$transporteP = $nomina->transporte($sueldo);
$bonoP = $nomina->bono($sueldo);
$retencionPersona = $nomina->reten($sueldo);
$arlPersona = $nomina->arl($sueldo);
$saludPersona = $nomina->salud($sueldo);
$pensionPersona = $nomina->pension($sueldo);
$pagoP = $nomina->totalPago($sueldo);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>Sueldo: <?php echo $sueldo ?></div>
    <div>Subsidio de transporte: <?php echo $transporteP ?></div>
    <div>Bono Persona: <?php echo $bonoP ?></div>
    <div>Retencion Persona: <?php echo $retencionPersona ?></div>
    <div>Arl Persona: <?php echo $arlPersona ?></div>
    <div>Salud Persona: <?php echo $saludPersona ?></div>
    <div>Pension Persona: <?php echo $pensionPersona ?></div>
    <div>Pago total: <?php echo $pagoP ?></div>
</body>
</html>