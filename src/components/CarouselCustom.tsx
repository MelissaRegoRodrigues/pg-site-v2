import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselProps from '../interfaces/CarouselProps';

export default function CarouselCustom({imagem1, imagem2, imagem3, descImagem1, descImagem2, descImagem3}: CarouselProps) {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="w-full h-96 bg-cover bg-center"
          src={imagem1}
            alt={descImagem1}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="w-full h-96 bg-cover bg-center"
          src={imagem2}
            alt={descImagem2}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
            className="w-full h-96 bg-cover bg-center"
            src={imagem3}
              alt={descImagem3}
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