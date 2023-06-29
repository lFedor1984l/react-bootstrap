import React from 'react';
import Carousel  from 'react-bootstrap/Carousel';
import galeryImg1 from '../Assets/galery-img1.jpg';
import galeryImg2 from '../Assets/galery-img2.jpg';
import galeryImg4 from '../Assets/galery-img4.jpg';

export default function Galery() {
  return (
    <Carousel>
        <Carousel.Item>
            <img 
                src={galeryImg1}
                className='d-block w-100'
            />
            <Carousel.Caption>
                <h3>Энергия</h3>
                <p>Мы вас будем заряжать энергией</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img 
                src={galeryImg2}
                className='d-block w-100'
            />
            <Carousel.Caption>
                <h3>Код</h3>
                <p>Вы будите писать чистый код</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img 
                src={galeryImg4}
                className='d-block w-100'
            />
            <Carousel.Caption>
                <h3>Профессия</h3>
                <p>Вы станете востребованным специалистом</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    
  )
}
