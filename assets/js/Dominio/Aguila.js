// Importar la clase Animal desde Animal.js para implementar la herencia
import { Animal } from "./Animal.js";

// Clase Aguila que representa a un águila extendiendo la clase Animal
export class Aguila extends Animal {
  // Constructor de la clase Aguila
  constructor(nombre, edad, img, comentarios, sonido) {
    // Llamar al constructor de la clase padre (Animal) con super()
    super(nombre, edad, img, comentarios, sonido);
  }

  // Método específico para chillar del águila
  chillar() {
    // Imprimir mensaje en la consola indicando que el águila está chillando
    console.log(`El águila ${this.nombre} está chillando.`);
  }
}
