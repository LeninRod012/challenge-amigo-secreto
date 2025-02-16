// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//VARIABLES Y ARRAYS

    let amigos =[];
    let varListaAmigos=0;
//FUNCIONES


    /*esta funcion permite agregar un amigo nuevo al darle al boton agregar.
    Agregará al array amigos[] el valor que haya en el input, siempre y cuando
    no est'e vac'io
    Tambien, si existe el mensaje del amigo secreto del juego anterior, lo borra*/
    function agregarAmigo(){
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
            const resultadoFinal = document.getElementById("resultado");
            resultadoFinal.textContent= "";
        }
    };

    //esta funcion agrega los amigos a un elemento lista.
    //se va a ejecutar desde dentro de la funcion agregar amigo
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

    /*esta funcion primero identifica si no se han agregado amigos, y te da
    una alerta en caso de. En caso que se hayan agregado amigos, los soltea y
    pone un amigo secreto aleatorio.
    Adicionalmente, vacea la lista de nombres y el array. */
    function sortearAmigo()
    {
    if (amigos.length == 0) {
        alert( "No hay amigos que soltear")
    }
    else{
        amigoSecreto = Math.floor(Math.random()*amigos.length);
        console.log(amigoSecreto);
        const resultadoFinal = document.getElementById("resultado");
        listaAmigos.innerHTML = '';
        resultadoFinal.textContent= `El amigo secreto es ${amigos[amigoSecreto]}`;
        amigos.length=0;
        console.log(amigos.length);

    };

    };