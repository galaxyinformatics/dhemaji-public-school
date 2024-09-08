import React from 'react'
import Carousel from 'react-bootstrap/Carousel'  
import Image from 'next/image'
import i1 from './images/classRoom.jpeg';
import i2 from './images/kidsRoom.jpeg';
import i3 from './images/speech.jpeg';
import i4 from './images/dance.jpeg';
import styles from '../styles/Home.module.css'


function ControlledCarousel() {
    return (
      <Carousel className={styles.carouselImage}>
        <Carousel.Item interval={3000}>
          <Image
            src={i1}
            alt="First slide"
            className={styles.carouselImage}
          />
          <Carousel.Caption>
            <h3 className={styles.ScrollText}></h3>
          </Carousel.Caption>
        </Carousel.Item>
  
        <Carousel.Item interval={3000}>
          <Image
            src={i2}
            alt="Second slide"
            className={styles.carouselImage}
          />
          <Carousel.Caption>
            <h3 className={styles.ScrollText}></h3>
          </Carousel.Caption>
        </Carousel.Item>
  
        <Carousel.Item interval={3000}>
          <Image
            src={i3}
            alt="Third slide"
            className={styles.carouselImage}
          />
          <Carousel.Caption>
            <h3 className={styles.ScrollText}>Childrens day</h3>
          </Carousel.Caption>
        </Carousel.Item>
  
        <Carousel.Item interval={3000}>
          <Image
            src={i4}
            alt="Fourth slide"
            className={styles.carouselImage}
          />
          <Carousel.Caption>
            <h3 className={styles.ScrollText}>Childrens day</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default ControlledCarousel;