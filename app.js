// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresArray = [];

function agregarAmigo(){
    let nombreId = document.getElementById("amigo");
    let nombre = nombreId.value;
    nombre != "" ? nombresArray.push(nombre) :  alert("¡Añade el nombre de tu amigo!");
    nombreId.value = "";
    visualizarLista();
}

function visualizarLista(){
let lista = document.getElementById("listaAmigos");
lista.innerHTML = ""; //Reinicia el contenido de el ul lista para que no se sobrecruba la lista
for(let i=0; i<nombresArray.length;i++){
        let li = document.createElement("li"); //Crea un elemento i por cada nombre de la lista
        li.textContent = nombresArray[i]; //añade contenido al elemento li
        lista.append(li) // añado el li al ul "lista"
}
}

