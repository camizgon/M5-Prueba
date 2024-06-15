// Punto 5: Dividir el código en módulos
import {
  Leon,
  Lobo,
  Oso,
  Serpiente,
  Aguila,
} from "./Dominio/TiposDeAnimales.js";

// Función IIFE - Punto 4: Función autoejecutable IIFE
(() => {
  // busca el elemento del doc HTML (btn) este se encuentra esperando el click del usuario para activar el código dentro de la función flecha. Evento de clic en el botón "Registrar"
  document.getElementById("btnRegistrar").addEventListener("click", () => {
    const nombre = document.getElementById("animal").value;
    const edad = document.getElementById("edad").value;
    const comentarios = document.getElementById("comentarios").value;

    // Condición que verifica que estas variables no tengan un valor asigando
    if (!nombre || !edad || !comentarios) {
      // si alguna de estas no tiene un valor asigando se ejecuta el alert
      alert("Por favor, complete todos los campos");
      return;
    }

    // Declaración de variables, que almacenará las rutas de las imagenes y sonido
    let imgPath, sonido;
    // se crea la varible animal para crear la instancia de un tipo de animal especifico
    let animal;
    // se ejecuta a base de la variable nombre, corresponde al tipo de animal seleccionado por el usuario, depende de este se asigan las rutas a imagenes y sonidos especificas de cada animal
    switch (nombre) {
      case "Leon":
        imgPath = "./assets/imgs/Leon.png";
        // se crea la instancia animal junto las rutas y los otros parametros
        animal = new Leon(nombre, edad, imgPath, comentarios, sonido);
        // sale del bloque
        break;
      case "Lobo":
        imgPath = "./assets/imgs/Lobo.jpg";
        animal = new Lobo(nombre, edad, imgPath, comentarios, sonido);
        break;
      case "Oso":
        imgPath = "./assets/imgs/Oso.jpg";
        animal = new Oso(nombre, edad, imgPath, comentarios, sonido);
        break;
      case "Serpiente":
        imgPath = "./assets/imgs/Serpiente.jpg";
        animal = new Serpiente(nombre, edad, imgPath, comentarios, sonido);
        break;
      case "Aguila":
        imgPath = "./assets/imgs/Aguila.png";
        animal = new Aguila(nombre, edad, imgPath, comentarios, sonido);
        break;
    }

    // Una vez salga del bloque switch llama la función fetchImageAndAddToTable con el objeto animal creado como argumento, esta se encarga de cargar la imagen y añadirla a la tabla
    fetchImageAndAddToTable(animal);
    // esta función restablece el formulario, limpiando los campos de entrada para que el usuario pueda ingresar otro animal.
    resetFormulario();
  });

  // llamamos la función con el objeto ya declarados al terminar bloque switch, esta incluye la URL de la imagen e información del animal.
  async function fetchImageAndAddToTable(animal) {
    try {
      // Solicita la imagen del animal desde la URL. Fetch de la imagen del animal desde la URL proporcionada en animal.img
      const response = await fetch(animal.img);
      // Verifica si la respuesta es exitosa
      if (!response.ok) throw new Error("La respuesta no fue correcta");
      // Obtiene el blob de la respuesta
      const blob = await response.blob();
       // Crea un object URL para la imagen
      const objectURL = URL.createObjectURL(blob);
      // llama a la función agregarAnimalATabla, pasando el objeto animal y la URL del objeto (objectURL) como argumentos. Esta función es responsable de agregar el animal (junto con su imagen) a la tabla en la interfaz de usuario.
      agregarAnimalATabla(animal, objectURL);
    } catch (error) {
      // ejecuta si ocurre algún error durante el proceso fetch. En caso de error, se imprime un mensaje en la consola indicando que hubo un problema al cargar la imagen
      console.error("Hubo un problema al cargar la imagen:", error);
      alert(
        "Ocurrió un problema al cargar la imagen del animal. Por favor, intente de nuevo."
      );
    }
  }

  // llamamos la función agregarAnimalATabla declarara en el fetch, la cual toma dos argumentos un objeto animal y una URL de objeto (Imagen del animal)
  function agregarAnimalATabla(animal, objectURL) {
    // Elemento del DOM con el id "Animales". Este es el contenedor donde se van a añadir las tarjetas de los animales.
    const tabla = document.getElementById("Animales");
    // Se añade un nuevo bloque de HTML al contenido existente en el elemento "Animales". Este bloque de HTML representa una tarjeta (card) que contiene la información del animal
    tabla.innerHTML += `
        <div class="card m-2" style="width: 200px; height: 300px;" onclick="mostrarModal('${animal.nombre}', '${animal.edad}', '${objectURL}', '${animal.comentarios}')">
        <img src="${objectURL}" class="card-img-top my-image" alt="${animal.nombre}">
        <div class="card-body">
        <h5 class="card-title">${animal.nombre}</h5>
        <p class="card-text">${animal.edad}</p>
        </div>
        </div>
        `;
  }

  // define una función llamada resetFormulario que no toma ningún argumento.
  function resetFormulario() {
    // selecciona el elemento del formulario con el id y se establece su valor (value) a una cadena vacía (""). Esto borra cualquier selección hecha en el campo de selección de animales.
    document.getElementById("animal").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("comentarios").value = "";
  }



  // define una función llamada mostrarModal que muestra un modal con la información del animal
  window.mostrarModal = function (nombre, edad, img, comentarios) {
    // Selecciona el elemento del DOM con la clase "modal-body" donde se va a colocar el contenido del modal
    const modalBody = document.querySelector(".modal-body");
    // Define el contenido HTML del modal utilizando template literals (`)
    modalBody.innerHTML = `
        <img src="${img}" class="img-fluid" alt="${nombre}">
        <p>${comentarios}</p>
      `;
      // Muestra el modal utilizando jQuery: #exampleModal es el selector del modal en el DOM
    $("#exampleModal").modal("show");
  };
})();
