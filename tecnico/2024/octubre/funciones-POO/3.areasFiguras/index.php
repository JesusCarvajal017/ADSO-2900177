<?php
include('libreria/classAreas.php');
$area = new areas();

$ladop = 6;
$baseR = 7;
$alturaR = 4;
$baseT = 5;
$alturaT = 9;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>areas</title>
</head>
<body>
    <div>AreaCuadrado: <?php echo $area->areaCu($ladop); ?></div>
    <div>AreaRectangulo: <?php echo $area->areaRec($baseR,$alturaR); ?></div>
    <div>AreaTriangulo: <?php echo $area->areaTri($baseT,$alturaT); ?></div>
</body>
</html>