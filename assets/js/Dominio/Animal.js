 export class Animal {
    // Declaro los "Atributos" de la clase Animal
    #nombre;
    #edad;
    #img;
    #comentarios;
    #sonido;

    constructor(nombre, edad, img, comentarios, sonido) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#img = img;
        this.#comentarios = comentarios;
        this.#sonido = sonido;
    }

    /* GETTERS */

    get nombre() {
        return this.#nombre;
    }

    get edad() {
        return this.#edad;
    }

    get img() {
        return this.#img;
    }

    get comentarios() {
        return this.#comentarios;
    }

    /* SETTERS */

    set comentarios(newText) {
        this.#comentarios = newText;
    }

    /* GETTERS SONIDO */

    get sonido() {
        return this.#sonido;
    }

    /* MÉTODO PARA REPRODUCIR EL SONIDO */
    makeSound() {
        const player = document.getElementById('player');
        player.src = this.#sonido;
        player.play();
    }
}

