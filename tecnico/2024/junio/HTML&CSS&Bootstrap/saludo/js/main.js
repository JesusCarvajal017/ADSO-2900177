window.onload = function(){
    document.getElementById('saludar').addEventListener('click', ()=>{
        let nombre = document.getElementById('txtNombre').value;
        if(nombre){
            document.querySelector('.card-mostrar').style = 'display: block'
            document.querySelector('.second-content').innerHTML = `<span> ${nombre} </span>`;
        }

        return false;

    })




}