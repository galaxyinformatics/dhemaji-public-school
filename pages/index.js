import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image'
import Carousel from '../components/carousel';
import Navbar from '../components/navbar2.js';
import MySVGImage from '../components/images/logoFinal.svg';
import Link from 'next/link';
import NoticeBoard from '../components/NoticeBoard';






export default function Home() {
  return (
    <>
      <Head>
      <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="description" content="Welcome to Dhemaji Public School, a nurturing environment for young minds. Explore our programs and facilities."/>
    <title>Dhemaji Public School - Nurturing Young Minds</title>
      </Head>
     



<div className={`${styles.slider} ${styles.siteContainer}`}>
<div className={styles.carouselContainer}>
    <Carousel />
  </div>
  <div className={styles.event}>
      <h2 className={styles.heading}>Notice Boards</h2>
      <div className={styles.marqueeSize}>
      <NoticeBoard/>
      </div>
    </div>
</div>

<div className={styles.mainSection} style={{background:'#f0f3fa'}}>
  <div className={`${styles.container} ${styles.siteContainer}`}>

  <div className={styles.frontContainer}>
      <h2 className={styles.heading}>About Us</h2>
      <div className={styles.frontContainerContent}>
      <Image 
              src={MySVGImage} 
              alt="School Logo" 
              height={400} 
              width={400} 
            />
        <p> Kids Care Edutech & Research Trust one of the top foundation school from New Delhi is an organization in education with its significant contribution in spreading value-based learning to all the sections of the society. By way of inculcating the right balance of Vedic wisdom and modern technology in young minds, the society is unique in its educative endeavors </p>
        <Link href="/about"><button>Read More</button></Link>
        
      </div>
    </div>

    <div className={styles.frontContainer}>
      <h2 className={styles.heading}>Chairman's Message</h2>
      <div className={styles.frontContainerContent}>
        <p> I believe that holistic education is the sole crucial factor which leads to enriching progress in the true sense of the word. </p>
      </div>
    </div>
  </div>
</div>
      
    </>
  )
}
