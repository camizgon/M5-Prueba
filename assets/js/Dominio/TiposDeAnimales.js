/*CLASES TIPOS DE ANIMALES (LEÓN, LOBO, OSO, SERPIENTE, AGUILA) EXTENDIDA DE ANIMAL */
//Punto 1 : Crear las clases representadas en el diagrama implementando la herencia indicada. PUNTO 5: Dividir el código en módulos
import { Animal } from "./Animal.js";

//Define una clase llamada león que se extiende de animal heredando sus metodos y atributos
export class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
}

export class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
}

export class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
}

export class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
}

export class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
}
