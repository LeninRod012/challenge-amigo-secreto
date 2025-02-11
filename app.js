// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos =[];
let varListaAmigos=0




//variables  y arrays
//let amigos[];


//FUNCIONES
/*Esta funcion permitira que el usuario agregue un nombre en el campo 'Escribe un nombre'
y que lo pueda agregar al array amigos al darle al boton anadir amigos*/

function agregarAmigo(){

    /*esta funcion, al darle click al boton añadir te permite agregar
    un amigo que se almacena en el ultimo valor del array amigos. Luego
    Imprime el ultimo amigo y te dice la longitud actual del array*/


var amigoNuevo = document.getElementById("amigo"); //me permite asignarle el elemento con ese ID a una variable de JS.


if (amigoNuevo.value==""){ //confirma que el nombre agregado no esté vacío
    alert("Ingrese un nombre valido")
}
else{

   amigos.push(amigoNuevo.value); // Me permite agregar el *value* en ese input a el array amigos
   amigoNuevo.value= ""; // borra lo que hay en el input para poder escribir de nuevo.
console.log(amigos[amigos.length-1]);
console.log(amigos.length);
agregarALista(); // ejecuta la funcion Agregar a la lista
}
};



//esta funcion agrega los amigos a un elemento lista.
//se va a ejecutar desde dentro de la funcion agregar amigo
/*function agregarALista(){

    varListaAmigos= document.getElementById("listaAmigos");

    amigos.forEach(nombreAmigo => {
        const nuevoLi = document.createElement('li');
        nuevoLi.textContent = nombreAmigo;
        listaAmigos.appendChild(nuevoLi);  
    }
    )

}*/

function agregarALista(){
    var listaAmigos = document.getElementById("listaAmigos");

    // Limpia la lista antes de añadir nuevos elementos
    listaAmigos.innerHTML = ''; // Elimina todos los elementos <li>

    for (let i = 0; i < amigos.length; i++) {
        const nuevoLi = document.createElement('li');
        nuevoLi.textContent = amigos[i];
        listaAmigos.appendChild(nuevoLi); 
    }
}




function sortearAmigo()
{
/*esta funciona primera identifica si no se han agregado amigos, y te da
una alerta en caso de. En caso que se hayan agregado amigos, los soltea y
pone un alert un amigo aleatorio*/


if (amigos.length == 0) {
   alert( "No hay amigos que soltear")
}
else{
amigoSecreto = Math.floor(Math.random()*amigos.length);
console.log(amigoSecreto);
const resultadoFinal = document.getElementById("resultado");
/*const borrarLista = document.getElementById("amigos");
borrarLista.textContent= "";*/
resultadoFinal.textContent= `El amigo secreato es ${amigos[amigoSecreto]}`;
//alert(`El amigo secreto es ${amigos[amigoSecreto]}`);
};

};
/*function agregarAmigo(){
    alert('activaste la función agregar amigo')
};
alert('el juego está vivo');*/





/*let hora = 0;
hora = prompt("Qu'e hora es?")
alert("Son las "+hora)*/



