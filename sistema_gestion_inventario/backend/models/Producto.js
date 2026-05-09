class Producto {

    #precio;

    constructor(nombre, precio) {
        this.nombre = nombre;
        this.#precio = precio;
    }

    obtenerPrecio() {
        return this.#precio;
    }

}

export default Producto;