import React from "react";
import "./Carrito.css";
import Producto from "./Producto";

const Carrito = ({ carrito, agregarProducto }) => (
  <div className="carrito">
    <h2>Tu carrito</h2>

    {carrito.length === 0 ? (
      <p> No hay elementos </p>
    ) : (
      carrito.map(producto => (
        <Producto
          key={producto.id}
          producto={producto}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      ))
    )}
  </div>
);

export default Carrito;
