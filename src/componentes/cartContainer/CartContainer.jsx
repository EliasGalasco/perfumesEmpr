import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { cartContext } from "../../storage/cartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { creadorOrdenDeCompra } from "../../services/firebase";
import Swal from "sweetalert2";
import CartForms from "./CartForms";

function CartContainer() {
  const { cart, removeItem, precioTotal, clearCart} = useContext(cartContext);

  async function finalizarCompra(userData) {
    const items = cart.map((productos) => ({
      id: productos.id,
      titulo: productos.titulo,
      precio: productos.precio,
      descuento: productos.discount,
      count: productos.count
    }));
    //1 Model de orden de compra
    const order = {
      buyer: userData,
      items: cart,
      date: new Date(),
      total: precioTotal(),
    };
    //2Subir a la dataBase
    let idCompra = await creadorOrdenDeCompra(order);
    
    //3 Ultimo finalizar compra y darle un chekout al user
        Swal.fire({
          title: `Gracias por su compra!.
                  A la brevedad nos contactaremos con usted para finalizar el pedido`,
          text: `Su ID del envio es ${idCompra}`,
          imageUrl: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/thank-you-for-your-purchase-templates-design-76737d347591c5931aa082721738deca_screen.jpg?ts=1635588697',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
        })
        /*Agregar funcion vaciar carro */
        clearCart()
    
  }
  if (cart.length === 0) {
    return (
      <>
        <h2 className="d-flex justify-content-center">
          No tienes ningun producto agregado.{" "}
        </h2>
        <hr className="container" />
        <div className="d-flex justify-content-around">
          <h3>Mi Carrito</h3>
          <Link to="/">
            <Button>Volver a la tienda</Button>
          </Link>
        </div>
        <hr className="container" />
      </>
    );
  } else {
    return (
      <>
        <h1 className="d-flex justify-content-center logo">Tienda Ruffino</h1>
        <div className="d-flex container justify-content-end">
          <Link to="/">
            <Button>Seguir Comprando</Button>
          </Link>
        </div>
        <hr className="container" />
        <div className="d-flex justify-content-evenly">
          <h3>Mi Carrito</h3>
          <p className="fw-bold">Precio c/u</p>
          <p className="fw-bold">Suma del producto</p>
        </div>
        <hr className="container" />
        {cart.map((item) => (
          <div key={item.id} className="d-flex justify-content-around">
            <div>
              <Card.Img
                variant="top"
                className="imgDetail imgCart "
                src={item.imagen}
              />
              <h3 className="d-flex">{item.titulo}</h3>
              <p className="d-inline">Cantidad: {item.count}</p>
              {cart ? (
                <p className="stock d-inline">
                  {" "}
                  <FaCircle className="green" /> {item.stock}
                </p>
              ) : (
                <p className="stock d-inline">
                  <FaCircle className="red" /> Sin Stock
                </p>
              )}
              <hr />
            </div>
            <div className="d-flex align-items-center">
            {
              item.discount?
              <p className='precio'><del>${Math.round(item.precio + ((item.precio * item.discount)/100))}</del><br /> ${Math.round(item.precio)} </p>
              :
              <p className='precio'>${item.precio}</p>
            }
              </div>
            <div className="d-flex align-items-center">
              <Button
                className="btnEliminar"
                onClick={() => removeItem(item.id)}
              >
                X
              </Button>
            </div>
          </div>
        ))}
        <hr className="container" />
        <div className="d-flex justify-content-around precio">
        Precio total: ${Math.round(precioTotal())}
        </div>
        <CartForms onSubmit={finalizarCompra}/>
      </>
    );
  }
}
export default CartContainer;
