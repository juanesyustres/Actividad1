import ProductoPremium from "../models/ProductoPremium.js";

const obtenerProductos = (req, res) => {

    const producto = new ProductoPremium(
        "Laptop Gamer",
        3500000,
        "2 años"
    );

    res.status(200).json({
        ok: true,
        productos: [
            {
                nombre: producto.nombre,
                precio: producto.obtenerPrecio(),
                garantia: producto.garantia
            }
        ]
    });

};

export {
    obtenerProductos
};