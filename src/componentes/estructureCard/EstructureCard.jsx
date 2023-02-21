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
        <Card className='col-6 cards col-md-6 col-lg-12 m-1 ' style={{ width: '18rem' }}>
          <Card.Img variant="top" className='h-5 img-fluid imgMix' src={imagen} />
          <Card.Body className='card-container'>
            <Card.Title className='titulo'>{titulo}</Card.Title>
            <Card.Text className='detalle detail'>
              {detalle}
            </Card.Text>
            <div className='precios d-block'>
            <div>
              {
                stock? <p className='stock '><FaCircle className='green'/> {stock}</p>
                :
                <p className='stock '><FaCircle className='red'/> Sin Stock</p>
              }
            </div>
            {
              discount?
            <>
            <p className='precio fs-6'><span className="fw-light red">({discount}% OFF)</span><del className='fw-light'>${Math.round(precio + ((precio * discount)/100))}</del></p>
            <br />
            <p className="fs-3 precio">${Math.round(precio)}</p>
            </>              :
              <p className='precio'>${precio}</p>
            }
            {
              stock?
              <Link to={urlDetail}><Button className='btnDetalle' id={id} >Ver Detalle</Button></Link>
              :
              <Link to={urlDetail}><Button className='disabled' id={id} >Ver Detalle</Button></Link>

            }
            </div>
          </Card.Body>
        </Card>
      );
    }

export default EstructureCard