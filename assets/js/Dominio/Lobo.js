import { Animal } from "./Animal.js";
export class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  // Método específico para aullar del lobo
  aullar() {
    console.log(`El lobo ${this.nombre} está aullando.`);
  }
}
