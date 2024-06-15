// Clase Animal que representa un animal con sus atributos y métodos básicos
export class Animal {
    // Atributos privados de la clase Animal
    #nombre;
    #edad;
    #img;
    #comentarios;
    #sonido;

    // Constructor de la clase Animal
    constructor(nombre, edad, img, comentarios, sonido) {
        this.#nombre = nombre;         
        this.#edad = edad;             
        this.#img = img;               
        this.#comentarios = comentarios; 
        this.#sonido = sonido;         
    }

    /* Getters y Setters */

    // Getter para obtener el nombre del animal
    get nombre() {
        return this.#nombre;
    }

    // Getter para obtener la edad del animal
    get edad() {
        return this.#edad;
    }

    // Getter para obtener la ruta de la imagen del animal
    get img() {
        return this.#img;
    }

    // Getter para obtener los comentarios sobre el animal
    get comentarios() {
        return this.#comentarios;
    }

    // Setter para actualizar los comentarios sobre el animal
    set comentarios(newText) {
        this.#comentarios = newText;
    }

    // Getter para obtener el sonido del animal
    get sonido() {
        return this.#sonido;
    }
}

