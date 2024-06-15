// Importar la clase Animal desde Animal.js para implementar la herencia
import { Animal } from "./Animal.js";

// Clase Serpiente que representa a una serpiente extendiendo la clase Animal
export class Serpiente extends Animal {
  // Constructor de la clase Serpiente
  constructor(nombre, edad, img, comentarios, sonido) {
    // Llamar al constructor de la clase padre (Animal) con super()
    super(nombre, edad, img, comentarios, sonido);
  }

  // Método específico para sisear de la serpiente
  sisear() {
    // Imprimir mensaje en la consola indicando que la serpiente está siseando
    console.log(`La serpiente ${this.nombre} está siseando.`);
  }
}
