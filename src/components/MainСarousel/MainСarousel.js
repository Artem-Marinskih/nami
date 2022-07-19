import React from 'react';
import  Carousel  from 'better-react-carousel';
import sale from '../../assets/images/sale.png';
// import './MainCarousel.scss';

export const MainCarousel = () => {
  return (
    <Carousel loop={true} showDots={true}>
      <Carousel.Item>
        <img width="100%" src={sale} alt='text'/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={sale} alt='text'/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={sale} alt='text'/>
      </Carousel.Item>
    </Carousel>
  );
};
