import React from "react";
import Carousel from "react-bootstrap/Carousel";

const BootstrapCarousel = () => {
  return (
    <div className="container d-flex h-100">
      <Carousel className="carousel align-self-center">
        <Carousel.Item className="carousel-item">
          <Carousel.Caption className="carousel-caption">
            <h3>First Slide</h3>
            <p>Some informative information about first slide</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <Carousel.Caption className="carousel-caption">
            <h3>Second Slide</h3>
            <p>Some informative information about second slide</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <Carousel.Caption className="carousel-caption">
            <h3>Third Slide</h3>
            <p>Some informative information about third slide</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BootstrapCarousel;
