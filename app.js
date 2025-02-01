// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresArray = []; // Arreglo que guardara los nombres
let lista = document.getElementById("listaAmigos"); // elemento para minupaler la lista de amigos
let amigoSecreto = document.getElementById("resultado") // elemento para manipular el resultado 

function agregarAmigo(){
    let nombreId = document.getElementById("amigo");
    let nombre = nombreId.value;

    if( nombre != ""){
        nombresArray.push(nombre)
        nombreId.value = "";           // añadir nombre al array
        amigoSecreto.innerHTML = "";
       visualizarLista();
    }else{
        alert("¡Añade el nombre de tu amigo!"); // entrada no vacia
    }
}

function visualizarLista(){
lista.innerHTML = ""; //Reinicia el contenido de el ul lista para que no se sobrecruba la lista
for(let i=0; i<nombresArray.length;i++){
        let li = document.createElement("li"); //Crea un elemento i por cada nombre de la lista
        li.textContent = nombresArray[i]; //añade contenido al elemento li
        lista.append(li); // añado el li al ul "lista"
}
}

function sortearAmigo(){
    amigoSecreto.innerHTML = "";
    if(nombresArray.length > 0 ){ // por lo menos un nombre registrado
        let numeroMax =  nombresArray.length; 
        let numeroAleatoreo = Math.floor(Math.random()* numeroMax); // generar numero aleatoreo 
        lista.innerHTML = ""; 
        amigoSecreto.append(nombresArray[numeroAleatoreo]) // mostrar resultado
    }else{
        alert("Para realizar el sorteo se debe tener por lo menos un amigo registrado")
    }
   }

