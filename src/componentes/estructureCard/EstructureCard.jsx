import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../estructureCard/EstructureCard.css"
import { FaCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';


function EstructureCard({id, titulo, detalle, imagen, precio, stock, discount, cantidad}) {
  const urlDetail = `/item/${id}`;
    return (
        <Card className='col-6 cards col-md-6 col-lg-6 m-1 ' style={{ width: '18rem' }}>
          <Card.Img variant="top" className='h-5 img-fluid imgMix' src={imagen} />
          <Card.Body className='card-container'>
            <Card.Title className='titulo'>{titulo}</Card.Title>
            <Card.Text className='detalle detail'>
              {detalle}
            </Card.Text>
            {
              stock?
              <Link to={urlDetail}><Button className='btnDetalle' id={id} >Ver Detalle</Button></Link>
              :
              <Link to={urlDetail}><Button className='disabled' id={id} >Ver Detalle</Button></Link>

            }
            <div className='precios'>
            <div>
            { discount &&
            <span style={{color: "#43c745"}}>Desc: {discount}%</span>
            }
              {
                stock? <p className='stock'><FaCircle className='green'/> {stock}</p>
                :
                <p className='stock '><FaCircle className='red'/> Sin Stock</p>
              }
            </div>
            {
              discount?
              <p className='precio'><del>${Math.round(precio + ((precio * discount)/100))}</del><br /> ${Math.round(precio)} </p>
              :
              <p className='precio'>${precio}</p>
            }
            </div>
          </Card.Body>
        </Card>
      );
    }

export default EstructureCard