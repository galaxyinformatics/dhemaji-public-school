import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import MySVGImage from './images/logoFinal.svg';
import styles from '../styles/navbar.module.css';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';



function TwoLayerNavbar() {
  return (
    <nav className={styles.navbarCustom}>
      <div className={styles.navbarTop}>
        <div className="container d-flex justify-content-end align-items-center">
          
          <div className={styles.navSocials}>
          <a className={styles.navbarBrand3} style={{textDecoration:'none'}} onClick={() => window.location = 'mailto:kidscaredhemaji@gmail.com'}>

            <div style={{paddingLeft:'5px', paddingRight: '5px'}}><EmailIcon /></div>
            </a>
            <div style={{paddingLeft:'5px', paddingRight: '5px'}}><CallIcon /></div>
          </div>
        </div>
      </div>
      <div className={styles.navbarCenter}>
        <div className="container d-flex justify-content-between align-items-center">
          <div className={styles.navItemsLeft}>
          <div className={styles.two}>
            <h1>DHEMAJI PUBLIC SCHOOL
                <span>Dhemaji, Assam</span>
            </h1>
          </div>
        
        
          </div>
          <div className={styles.navLogo}>
            <Image 
              src={MySVGImage} 
              alt="School Logo" 
              height={200} 
              width={200} 
            />
          </div>
          <div className={styles.navItemsRight}>
          <button className={styles.loginButton} class="log">Student Login</button>
          <button className={styles.loginButton} class="log">Admin Login</button>
        
          </div>
        </div>
      </div>
      <div className={styles.navbarBottom}>
      <Navbar expand="lg" >
      <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        <Link href="/" className={styles.navItem}>Home</Link>
        <Link href="/admission" className={styles.navItem}>Admission</Link>
        <Link href="/academics" className={styles.navItem}>Academics</Link>
        <Link href="/about" className={styles.navItem}>About Us</Link>
        <Link href="/gallery" className={styles.navItem}>Gallery</Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
      </div>
    </nav>
  );
}

export default TwoLayerNavbar;
