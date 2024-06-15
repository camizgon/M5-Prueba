// Importar la clase Animal desde Animal.js para implementar la herencia
import { Animal } from "./Animal.js";

// Clase Oso que representa a un oso extendiendo la clase Animal
export class Oso extends Animal {
  // Constructor de la clase Oso
  constructor(nombre, edad, img, comentarios, sonido) {
    // Llamar al constructor de la clase padre (Animal) con super()
    super(nombre, edad, img, comentarios, sonido);
  }

  // Método específico para gruñir del oso
  gruñir() {
    // Imprimir mensaje en la consola indicando que el oso está gruñendo
    console.log(`El oso ${this.nombre} está gruñendo.`);
  }
}
