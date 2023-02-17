import React, { useState, useEffect, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "../estructureCard/EstructureCard.css"
import { getSingleItem } from '../../services/firebase';
import { FaCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import ItemCount from "../itemCount/ItemCount";
import "../itemDetailContainer/itemDetailContainer.css"
import { cartContext } from "../../storage/cartContext";
import { HeadBodyGrid } from "../Loader/Loader";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";




function ItemDetailContainer() {
  
  const [productos, setProduct] = useState({});
  const [loading, setLoading] = useState(true)
  const [isInCart, setIsInCart] = useState(false)


  /*----------useParams--------- */
  let { itemid } = useParams();

  /*-------useContext----------- */
  const {cart} = useContext(cartContext);

  /* Funcion controlador de stock */
  const itemCantidad =  cart.find( items => items.id === productos.id)
  let stockActualizado;
  if(itemCantidad)
  stockActualizado = productos.cantidad - productos.count;
  else 
  stockActualizado = productos.cantidad;

  /*----2 Funcion agregar al Carrito----- */
  /*(1)Llamamos a addItem con useContext y le pasamos como parametro el cartContext */
  const { addItem } = useContext(cartContext)
  
  function agregarAlCarro(count){
    /*Creamos un useState setIsInCart */
    setIsInCart(true);
    /*(2)llamamos al useContext y le pasamos el producto*/
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Tu item ha sido Agregado con exito!',
      showConfirmButton: false,
      timer: 1500
    })
    productos.count = count;
    addItem(productos)
  }

  useEffect(() => {
    getSingleItem(itemid).then((respuesta) => {
        setProduct(respuesta);
      })
      .finally(() =>{setLoading(false)} )
  }, [itemid]);

  if(loading){
    return <HeadBodyGrid/>
  }

  return (
    <Card className='ItemDetail img-fluid cardsDetail d-flex justify-content-center cards'>
          <Card.Img variant="top" className='h-5  imgDetail img-fluid d-flex justify-content-center' src={productos.imagen} />
          <Card.Body>
            <Card.Title className="titulo">{productos.titulo}</Card.Title>
            <Card.Text className='detalle detail'>
              {productos.detalle}
            </Card.Text>
            <div className='precios'>
            {
              productos.discount?
              <p className='precio'><del>${Math.round(productos.precio + ((productos.precio * productos.discount)/100))}</del><br /> ${Math.round(productos.precio)} </p>
              :
              <p className='precio'>${productos.precio}</p>
            }
            <div>
            {
                productos.stock? <p className='stock'><FaCircle className='green'/> {productos.stock}</p>
                :
                <p className='stock'><FaCircle className='red'/> Sin Stock</p>
              }
            </div>
            </div>
            {
              isInCart?
              <div className="d-flex justify-content-center">         
              <Link to="/cart">
              <Button  id={productos.id} >ir al Carrito</Button>
              </Link>
              <Link to='/'>
              <Button >Seguir Comprando</Button>
              </Link>
              </div> 
              :
              <ItemCount cantidad={stockActualizado} onAddtoCart={agregarAlCarro}/>
            }
          </Card.Body>
        </Card>
  );
}

export default ItemDetailContainer;
