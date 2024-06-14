import { Leon, Lobo, Oso, Serpiente, Aguila } from "./TiposDeAnimales.js";
// busca el elemento del doc HTML (btn) este se encuentra esperando el click del usuario para activar el código dentro de la función flecha
document.getElementById("btnRegistrar").addEventListener("click", () => {
  const nombre = document.getElementById("animal").value;
  const edad = document.getElementById("edad").value;
  const comentarios = document.getElementById("comentarios").value;

  //Condición que verifica que estas variables no tengan un valor asigando
  if (!nombre || !edad || !comentarios) {
    //si alguna de estas no tiene un valor asigando se ejecuta el alert
    alert("Por favor, complete todos los campos");
    return;
  }

  //Declaración de variables, que almacenará las rutas de las imagenes y sonido
  let imgPath, sonido;
  //se crea la varible animal para crear la instancia de un tipo de animal especifico
  let animal;
  //se ejecuta a base de la variable nombre, corresponde al tipo de animal seleccionado por el usuario, depende de este se asigan las rutas a imagenes y sonidos especificas de cada animal 
  switch (nombre) {
    case "Leon":
      imgPath = "./assets/img/leon.jpg";
      sonido = "./assets/sounds/leon.mp3";
      //se crea la instancia animal junto las rutas y los otros parametros
      animal = new Leon(nombre, edad, imgPath, comentarios, sonido);
      //sale del bloque
      break;
    case "Lobo":
      imgPath = "./assets/img/lobo.jpg";
      sonido = "./assets/sounds/lobo.mp3";
      animal = new Lobo(nombre, edad, imgPath, comentarios, sonido);
      break;
    case "Oso":
      imgPath = "./assets/img/oso.jpg";
      sonido = "./assets/sounds/oso.mp3";
      animal = new Oso(nombre, edad, imgPath, comentarios, sonido);
      break;
    case "Serpiente":
      imgPath = "./assets/img/serpiente.jpg";
      sonido = "./assets/sounds/serpiente.mp3";
      animal = new Serpiente(nombre, edad, imgPath, comentarios, sonido);
      break;
    case "Aguila":
      imgPath = "./assets/img/aguila.jpg";
      sonido = "./assets/sounds/aguila.mp3";
      animal = new Aguila(nombre, edad, imgPath, comentarios, sonido);
      break;
  }

// Una vez salga del bloque switch llama la función fetchImageAndAddToTable con el objeto animal creado como argumento, esta se encarga de cargar la imagen y añadirla a la tabla
  fetchImageAndAddToTable(animal);
  //esta función restablece el formulario, limpiando los campos de entrada para que el usuario pueda ingresar otro animal. 
  resetFormulario();
});

// llamamos la función con el objeto ya declarados al terminar bloque swtich, esta incluye la URL de la imagen e información del animal.
function fetchImageAndAddToTable(animal) {
    // Solicita la imagen del animal desde la URL.
  fetch(animal.img)
  //se ejecuta cuando cuando la solicitud fetch es exitosa y recibe una response, conbierte la respuesta en objeto binario datos de la imagen
    .then((response) => response.blob())
    //El segundo then se ejecuta despues que la respuesta ha sido convertida en blob 
    .then((blob) => {
        //convierte el blob en URL de objeto , esta puede ser utilizada en src del DOM
      const objectURL = URL.createObjectURL(blob);
      //llama a la función agregarAnimalATabla, pasando el objeto animal y la URL del objeto (objectURL) como argumentos. Esta función es responsable de agregar el animal (junto con su imagen) a la tabla en la interfaz de usuario.
      agregarAnimalATabla(animal, objectURL);
    })
    // ejecuta si ocurre algún error durante el proceso fetch. En caso de error, se imprime un mensaje en la consola indicando que hubo un problema al cargar la imagen
    .catch((error) => {
      console.error("Hubo un problema al cargar la imagen:", error);
    });
}

//llamamos la función agregarAnimalATabladeclarara en el fetch, la cual toma dos argumentos  un objeto animal y una URL de objeto (Imagen del animal)
function agregarAnimalATabla(animal, objectURL) {
//Elemento del DOM con el id "Animales". Este es el contenedor donde se van a añadir las tarjetas de los animales.
  const tabla = document.getElementById("Animales");
  //Se añade un nuevo bloque de HTML al contenido existente en el elemento "Animales". Este bloque de HTML representa una tarjeta (card) que contiene la información del animal
  tabla.innerHTML += `
    <div class="card m-2" onclick="mostrarModal('${animal.nombre}', '${animal.edad}', '${objectURL}', '${animal.comentarios}')">
    <img src="${objectURL}" class="card-img-top my-image" alt="${animal.nombre}">
    <div class="card-body">
    <h5 class="card-title">${animal.nombre}</h5>
    <p class="card-text">${animal.edad}</p>
    <button class="btn btn-primary" onclick="event.stopPropagation(); reproducirSonido('${animal.sonido}')">Escuchar sonido</button>
    </div>
    </div>
    `;
}
//define una función llamada resetFormulario que no toma ningún argumento.
function resetFormulario() {
    //selecciona el elemento del formulario con el id y se establece su valor (value) a una cadena vacía (""). Esto borra cualquier selección hecha en el campo de selección de animales.
  document.getElementById("animal").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("comentarios").value = "";
}
