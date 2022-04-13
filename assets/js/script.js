// activacion tooltop
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// funcion que valida que los datos ingresados no superen cierta longitud
function validar(){
    var nombre = document.getElementById("nombreInput").value;
    var asunto = document.getElementById('inputAsunto').value;
    var mensaje = document.getElementById('areaTexto').value;

    if(nombre.length > 15){
      alert('El nombre no puede superar los 15 caracteres');
    }
    if(asunto.length > 30){
      alert('El asunto no puede superar los 30 caracteres');
    }
    if(mensaje.length > 300){
      alert('El mensaje no puede superar los 300 caracteres');
    }
}


