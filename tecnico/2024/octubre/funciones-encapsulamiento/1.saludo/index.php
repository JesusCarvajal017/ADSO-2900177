<?php
    include('librerias/saludo.php');
    $saludo = new saludo();

    $saludo ->setSaludar('hola Mundo POO');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div><?php echo $saludo->getSaludar() ?></div>
</body>
</html>