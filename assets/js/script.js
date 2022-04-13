var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


function validar(){
    var nombre = document.getElementById("nombreInput").value;
    alert(nombre);
    var asunto = document.getElementById('inputAsunto').value;
    alert(asunto)
    var mensaje = document.getElementById('areaTexto').value;
    alert(mensaje)
    var mensaje = '';
    var cont = 0;

    // }else{
    //     if(nombre.length > 15){
    //         mensaje = ' El nombre no puede superar los 15 caracteres';
    //         alert(mensaje);
    //         cont = cont + 1;
    //     }
    //     if(asunto.length > 30){
    //         mensaje = 'El asunto no puede superar los 30 caracteres';
    //         alert(mensaje);
    //         cont = cont + 1;
    //     }
    //     if(mensaje.length > 150){
    //         mensaje = 'El mensaje no puede superar los 150 caracteres';
    //         alert(mensaje);
    //         cont = cont + 1;
    //     }
    // }
    // if(cont == 3){
    //     alert(nombre + "Su mensaje a sido enviado con exito");
    //     return true;
    // }
    // return false;
}


