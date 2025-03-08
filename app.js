    //Crear un array para almacenar los nombres
let amigos = [];
    //Implementa una función para agregar amigos
function agregarAmigo(){
    //Capturar el valor del campo de entrada
    let nombreAmigo=document.getElementById("amigo").value;
    //Validar la entrada
    let soloLetras = /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/;
    
    if (nombreAmigo === "" || !soloLetras.test(nombreAmigo)) {
        alert("Por favor, ingrese un nombre (, solo letras, sin números ni caracteres especiales).");
        return;
    }
    if (amigos.includes(nombreAmigo)) {
        alert("Este nombre ya ha sido agregado");
        return;
    }   
        //Actualizar el array de amigos
    else{
        amigos.push(nombreAmigo);        
        document.querySelector("#amigo").value="";
        //Limpiar el campo de entrada
        mostrarListaAmigo();
    }
}
    //Implementa una función para actualizar la lista de amigos
function mostrarListaAmigo(){
    //Obtener el elemento de la lista
    let listaAmigos=document.querySelector("#listaAmigos");
    //Limpiar la lista existente
    listaAmigos.innerHTML="";
    //Iterar sobre el arreglo
    for (let index =0; index < amigos.length; index ++){
    const element = amigos [index];
    //Agregar elementos a la lista
    let listaHTML=document.createElement("li");
    listaHTML.textContent=element;
    listaAmigos.appendChild (listaHTML);
    }
}
    //Implementa una función para sortear los amigo
function sortearAmigo(){
    //Validar que haya amigos disponibles:
    let cantidadAmigos=amigos.length;
    if (cantidadAmigos <2) {
        alert ("Por favor, ingrese al menos 2 nombre antes de sortear");
     }else {
        //Generar un índice aleatorio
        let indiceAmigo = amigos [Math.floor (Math.random() * cantidadAmigos)];
        //Obtener el nombre sorteado
        let resultadoHTML = document.querySelector("#resultado");
        //Mostrar el resultado
        resultadoHTML.innerHTML= `El amigo sorteado es: ${indiceAmigo}`;     
     }
     // //Limpiar la lista cuando se obtiene el resultado
     let limpiarLista = document.getElementById("listaAmigos");
     limpiarLista.innerHTML="";  
     
}


