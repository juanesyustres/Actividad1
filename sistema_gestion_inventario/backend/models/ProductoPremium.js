import Producto from "./Producto.js";

class ProductoPremium extends Producto {

    constructor(nombre, precio, garantia) {
        super(nombre, precio);
        this.garantia = garantia;
    }

}

export default ProductoPremium;