<?php
include('classNomina.php');
include('nominaP.php');

$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (isset($data['txtDiasT']) && isset($data['txtValorD'])) {
    $diasT = $data['txtDiasT'];
    $valorD = $data['txtValorD'];

    $valor = new valores($diasT, $valorD);
    $nomina = new nomina($valor);

    $responde = [];
    $responde['sueldo'] = $nomina->sueldo();
    $responde['transporte'] = $nomina->transporte();
    $responde['bono'] = $nomina->bono();
    $responde['retencion'] = $nomina->reten();
    $responde['arl'] = $nomina->arl();
    $responde['salud'] = $nomina->salud();
    $responde['pension'] = $nomina->pension();
    $responde['pagoT'] = $nomina->totalPago();

    header('Content-Type: application/json');
    echo json_encode($responde);
} else {
    // Enviar error si faltan datos
    header('Content-Type: application/json');
    echo json_encode(['error' => 'Faltan datos']);
}
?>
