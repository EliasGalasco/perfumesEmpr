import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Inicio() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src="https://cdn.discordapp.com/attachments/701992486037618688/1075993510806814730/d82d2dcb15da2bd18fe80e3954f0a92f.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src="https://cdn.discordapp.com/attachments/701992486037618688/1075993512048341042/52532770b9b4cc470d143bbfb4688d3e.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src="https://cdn.discordapp.com/attachments/701992486037618688/1075993512337735770/572af0ae29c193a29c70b30e3c9bd398.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Inicio;
