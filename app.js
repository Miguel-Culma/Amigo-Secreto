// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresArray = [];

function agregarAmigo(){
    alert("Click al boton");
    let nombreId = document.getElementById("amigo");
    let nombre = nombreId.value;
    nombre != "" ? nombresArray.push(nombre) :  alert("¡Añade el nombre de tu amigo!");
    nombreId.value = "";
}

