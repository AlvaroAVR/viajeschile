var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
function validar(){
    var nombre = document.getElementById('inputNombre');
    var asunto = document.getElementById('inputAsunto');
    var mensaje = document.getElementById('areaTexto');
    var mensaje = '';
    var cont = 0;

    if(nombre == '' || asunto == '' || mensaje == ''){
        mensaje='Debe completar todos los campos';
    }else{
        if(nombre.length > 15){
            mensaje = ' El nombre no puede superar los 15 caracteres';
            alert(mensaje);
            cont = cont + 1;
        }
        if(asunto.length > 30){
            mensaje = 'El asunto no puede superar los 30 caracteres';
            alert(mensaje);
            cont = cont + 1;
        }
        if(mensaje.length > 150){
            mensaje = 'El mensaje no puede superar los 150 caracteres';
            alert(mensaje);
            cont = cont + 1;
        }
    }
    if(cont == 3){
        alert(nombre + "Su mensaje a sido enviado con exito");
    }
}


