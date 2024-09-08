import styles from '../styles/Home.module.css'
import EmailIcon from '@mui/icons-material/Email';
import ContactPhoneIcon from '@mui/icons-material/Call';
export const Footer=()=>{
    return (
        <>
        <div style={{marginTop:'10px', bottom: '0', width: '100%'}}>
        <div style={{justifyContent:'center',textAlign:'center',padding:'20px', alignItems:'center',background: 'linear-gradient(90deg, rgb(0, 179, 255), rgb(146, 219, 67))',margin:'auto'}} className={styles.siteContainer}>
            <div style={{paddingLeft:'20px',paddingRight:'20px',textAlign:'center'}}><p style={{color:'black'}}>Address : Railway Station Road, Opposite Public Health Engineering, Dhemaji</p><a href="tel:9864463773" style={{textDecoration:'none'}}>
<div className={styles.navbarBrand3} >
<ContactPhoneIcon/>Tel : 98644 63773<br/>
</div>
</a>
<a href="tel:8638761717" style={{textDecoration:'none'}}>
<div className={styles.navbarBrand3} >
<ContactPhoneIcon/>Tel : 86387 61717<br/>
</div>
</a>
<a href="tel:9435964451" style={{textDecoration:'none'}}>
<div className={styles.navbarBrand3} >
<ContactPhoneIcon/>Tel : 94359 64451<br/>
</div>
</a>
<a href="tel:9954368541" style={{textDecoration:'none'}}>
<div className={styles.navbarBrand3} >
<ContactPhoneIcon/>Tel : 99543 68541<br/>
</div>
</a>
<a className={styles.navbarBrand3} style={{textDecoration:'none'}} onClick={() => window.location = 'mailto:kidscaredhemaji@gmail.com'}>
<EmailIcon />kidscaredhemaji@gmail.com<br/>
</a></div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14158.149138091665!2d94.5473173!3d27.4836613!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3740e7f10643b673%3A0xb597ebb9c9066171!2sDhemaji%20Public%20School!5e0!3m2!1sen!2sin!4v1725785805430!5m2!1sen!2sin" style={{height:'250px',width:'250px',justifyContent:'center',margin:'auto'}}></iframe>
        </div>
        </div>
        </>
    )
}