// Importamos las clases de animales desde un módulo
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./Dominio/TiposDeAnimales.js";

// Función autoejecutable IIFE - Punto 4: Función autoejecutable IIFE
(() => {
 // busca el elemento del doc HTML (btn) este se encuentra esperando el click del usuario para activar el código dentro de la función flecha. Evento de clic en el botón "Registrar"
  document.getElementById("btnRegistrar").addEventListener("click", () => {
    // Obtener valores del formulario
    const nombre = document.getElementById("animal").value;
    const edad = document.getElementById("edad").value;
    const comentarios = document.getElementById("comentarios").value;

    // Condición que valida que todos los campos del formulario estén completos
    if (!nombre || !edad || !comentarios) {
         // si alguna de estas no tiene un valor asigando se ejecuta el alert
      alert("Por favor, complete todos los campos");
      return;
    }

    //Declaración de variables, que almacenará las rutas de las imagenes y sonido
    let imgPath, sonido;
    // se crea la varible animal para crear la instancia de un tipo de animal especifico
    let animal;

    // Crear instancia del animal seleccionado por el usuario según el nombre, depende de esto se le asignan las rutas eimagenes especificas de cada animal
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

    // Esta función limpia los campos de entrada del formulario después de registrar el animal
    resetFormulario();
  });

  // Función asíncrona con el objeto animal para cargar imagen y agregar animal a la tabla
  async function fetchImageAndAddToTable(animal) {
    try {
      // Consultar imagen del animal desde la URL.  Fetch de la imagen del animal desde la URL proporcionada en animal.img
      const response = await fetch(animal.img);

      // Verificar si la respuesta del fetch fue exitosa
      if (!response.ok) throw new Error("La respuesta no fue correcta");

      // Convertir respuesta a blob
      const blob = await response.blob();

       // Crea un object URL para la imagen
      const objectURL = URL.createObjectURL(blob);

      //  // llama a la función agregarAnimalATabla, pasando el objeto animal y la URL del objeto (objectURL) como argumentos. Esta función es responsable de agregar el animal (junto con su imagen) a la tablaN DEL dom.
      agregarAnimalATabla(animal, objectURL);
    } catch (error) {
       // ejecuta si ocurre algún error durante el proceso fetch. En caso de error, se imprime un mensaje en la consola indicando que hubo un problema al cargar la imagen.
      console.error("Hubo un problema al cargar la imagen:", error);
      alert("Ocurrió un problema al cargar la imagen del animal. Por favor, intente de nuevo.");
    }
  }

  // llamamos la función agregarAnimalATabla declarara en el fetch, la cual toma dos argumentos un objeto animal y una URL de objeto (Imagen del animal)
  // Función para agregar animal a la tabla en el DOM
  function agregarAnimalATabla(animal, objectURL) {
    // Elemento del DOM con el id "Animales". Este es el contenedor donde se van a añadir las tarjetas de los animales.
    const tabla = document.getElementById("Animales");

    // Se añade un nuevo bloque de HTML al contenido existente en el elemento "Animales". Este bloque de HTML representa una tarjeta (card) que contiene la información del animal
    tabla.innerHTML += `
      <div class="card m-2" style="width: 250px; height: 450px;">
      <img src="${objectURL}" class="card-img-top my-image" alt="${animal.nombre}">
      <div class="card-body ">
        <h5 class="card-title">${animal.nombre}</h5>
        <p class="card-text">${animal.edad}</p>
        <p>${animal.comentarios}</p>
        <button onclick="reproducirSonido('${animal.sonido}')" class="btn btn-primary">Reproducir Sonido</button>
      </div>
    </div>
    `;
  }

  // Función para limpiar el formulario después de registrar un animal
  function resetFormulario() {
    // selecciona el elemento del formulario con el id y se establece su valor (value) a una cadena vacía (""). Esto limpia los campos del formulario
    document.getElementById("animal").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("comentarios").value = "";
  }
})();