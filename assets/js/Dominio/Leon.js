// Importar la clase Animal desde Animal.js para implementar la herencia
import { Animal } from "./Animal.js";

// Clase León que representa a un león extendiendo la clase Animal
export class Leon extends Animal {
  // Constructor de la clase Leon
  constructor(nombre, edad, img, comentarios, sonido) {
    // Llamar al constructor de la clase padre (Animal) con super()
    super(nombre, edad, img, comentarios, sonido);
  }

  // Método específico para rugir del león
  rugir() {
    // Imprimir mensaje en la consola indicando que el león está rugiendo
    console.log(`El león ${this.nombre} está rugiendo.`);
  }
}
