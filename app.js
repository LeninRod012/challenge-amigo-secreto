// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos =[];



//variables  y arrays
//let amigos[];


//FUNCIONES
/*Esta funcion permitira que el usuario agregue un nombre en el campo 'Escribe un nombre'
y que lo pueda agregar al array amigos al darle al boton anadir amigos*/

function agregarAmigo(){

    /*esta funcion, al darle click al boton añadir te permite agregar
    un amigo que se almacena en el ultimo valor del array amigos. Luego
    Imprime el ultimo amigo y te dice la longitud actual del array*/

   amigos.push(prompt("Introduce un amigo")) ;
console.log(amigos[amigos.length-1]);
console.log(amigos.length);

};









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
alert(`El amigo secreto es ${amigos[amigoSecreto]}`);
};

};
/*function agregarAmigo(){
    alert('activaste la función agregar amigo')
};
alert('el juego está vivo');*/





/*let hora = 0;
hora = prompt("Qu'e hora es?")
alert("Son las "+hora)*/



