import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";
function App() {
  //Listado de productos
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: "Camisa ReactJs", precio: 50 },
    { id: 2, nombre: "Camisa Angular", precio: 40 },
    { id: 3, nombre: "Camisa Vue", precio: 50 },
    { id: 4, nombre: "Camisa Sass", precio: 60 }
  ]);
  //State para un carrito de compra

  const [carrito, agregarProducto] = useState([]);

  // obtener fecha
  const fecha = new Date().getFullYear();
  return (
    <Fragment>
      <Header titulo="Tinda Virtual" />
      <h1>Lista de Productos</h1>
      {productos.map(producto => (
        <Producto
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      ))}

      <Carrito carrito={carrito} agregarProducto={agregarProducto} />
      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
