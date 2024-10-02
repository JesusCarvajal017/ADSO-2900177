<?php
include('libreria/classOperaciones.php');
$operar = new operacion();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>operaciones</title>
</head>
<body>
    <div><?php echo $operar->suma(); ?></div>
    <div><?php echo $operar->resta(); ?></div>
    <div><?php echo $operar->multiplicacion(); ?></div>
    <div><?php echo $operar->division(); ?></div>
</body>
</html>