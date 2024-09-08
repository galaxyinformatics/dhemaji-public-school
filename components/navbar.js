import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '../styles/navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import MySVGImage from './images/logoFinal.svg';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap CSS is imported


function BasicExample() {
  return (
    <>
      <Navbar expand="lg" >
        <Container>
          <Navbar.Brand href="/" className={styles.navBrandContainer}>
            <Image 
              src={MySVGImage} 
              alt="Dhemaji Public School Logo" 
              height={120} 
              width={120} 
              style={{ marginRight: '10px' }}
            />
            <div  className={styles.navHeading}>DHEMAJI PUBLIC SCHOOL</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link href="/" className={styles.navItem}>HOME</Link>
              <div className={styles.dropdown}>
              
                <div className={styles.navItem}>ADMISSION</div>
                <div className={styles.dropdowncontent}>
                  <ul style={{ backgroundColor: 'white'}}>
                    <Link href="/product-page/1" className={styles.dropdownItem} style={{ fontSize: '15px', textDecoration: 'none' }}>Pre-School Admission Instructions</Link>
                    <Link href="/products-category/medical-surgical/1" className={styles.dropdownItem} style={{ fontSize: '15px', textDecoration: 'none' }}>School fees Structure</Link>
                  </ul>
                </div>
              </div>
              <div className={styles.dropdown}>
                <div className={styles.navItem}>ABOUT US</div>
                <div className={styles.dropdowncontent}>
                  <ul style={{ backgroundColor: 'white', zIndex: 100, display: 'flex', flexDirection: 'column' }}>
                    <Link href="/galaxy-quality-certificate" className={styles.dropdownItem} style={{ fontSize: '15px', textDecoration: 'none' }}>Principal's Desk</Link>
                  </ul>
                </div>
              </div>
              <Link href="/about" className={styles.navItem}>CONTACT US</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BasicExample;
