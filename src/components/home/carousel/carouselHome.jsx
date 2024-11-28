import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Independencia from '../imagens/Independencia.jpg'
import Independencia2 from '../imagens/Independencia2.jpg'
import Independencia3 from '../imagens/Independencia3.jpg'
import './carousel.css';


function CarouselHome() {
    return (
        <div className='carousel-museu'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="carousel-image"
                        src={Independencia}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-image"
                        src={Independencia2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-image"
                        src={Independencia3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselHome;