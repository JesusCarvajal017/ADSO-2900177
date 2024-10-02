function realizarOperaciones() {
    const diasTrabajados = document.getElementById("txtDiasT").value;
    const valorDia = document.getElementById("txtValorD").value;

    // Validar que los campos no estén vacíos
    if (diasTrabajados === '' || valorDia === '') {
        alert('Por favor, llena todos los campos.');
        return;
    }

    // Realizar la petición con fetch
    fetch('librerias/calcular.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            txtDiasT: diasTrabajados,
            txtValorD: valorDia
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error);
        } else {
            document.getElementById("sueldo").textContent = `Sueldo: ${data.sueldo}`;
            document.getElementById("transporte").textContent = `Subsisio de transporte: ${data.transporte}`;
            document.getElementById("bono").textContent = `Bono Persona: ${data.bono}`;
            document.getElementById("retencion").textContent = `Retención Persona: ${data.retencion}`;
            document.getElementById("arl").textContent = `Arl Persona: ${data.arl}`;
            document.getElementById("salud").textContent = `Salud Persona: ${data.salud}`;
            document.getElementById("pension").textContent = `Pension Persona: ${data.pension}`;
            document.getElementById("pagoT").textContent = `Total a pagar: ${data.pagoT}`;
        }
    })
    .catch(error => console.error('Error:', error));
}
