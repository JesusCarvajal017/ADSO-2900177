function realizarOperaciones() {
    const ladoCuadrado = document.getElementById("txtLadoC").value;
    const baseRectangulo = document.getElementById("txtBaseRec").value;
    const alturaRectangulo = document.getElementById("txtalturaRec").value;
    const baseTriangulo = document.getElementById("txtBaseTri").value;
    const alturaTriangulo = document.getElementById("txtAlturaTri").value;

    // Validar que los campos no estén vacíos
    // if (diasTrabajados === '' || valorDia === '') {
    //     alert('Por favor, llena todos los campos.');
    //     return;
    // }

    // Realizar la petición con fetch
    fetch('libreria/calcular.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            txtLadoC: ladoCuadrado,
            txtBaseRec: baseRectangulo,
            txtalturaRec: alturaRectangulo,
            txtBaseTri: baseTriangulo,
            txtAlturaTri: alturaTriangulo
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error);
        } else {
            document.getElementById("areaC").textContent = `Area Cuadrado: ${data.areaCuadrado}`;
            document.getElementById("areaR").textContent = `Area Rectangulo: ${data.areaRectangulo}`;
            document.getElementById("areaT").textContent = `Area Triangulo: ${data.areaTriangulo}`;
        }
    })
    .catch(error => console.error('Error:', error));
}
