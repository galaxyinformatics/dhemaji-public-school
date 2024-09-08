import Head from 'next/head';
import styles from '../styles/about.module.css';





export default function Home() {
  return (
    <>
      <Head>
      <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="description" content="Welcome to Dhemaji Public School, a nurturing environment for young minds. Explore our programs and facilities."/>
    <title>Dhemaji Public School - Nurturing Young Minds</title>
      </Head>
     


      <div className={styles.aboutContainer}>
  <h2 className={styles.heading}>About Us</h2>
  <div className={styles.aboutContent}>
    <p className={styles.aboutText}>
      Kids Care Edutech & Research Trust, one of the top foundation schools in New Delhi, is dedicated to providing value-based learning to all sections of society. We aim to nurture young minds by balancing Vedic wisdom with modern technology.
    </p>
  </div>
</div>

      
    </>
  )
}
