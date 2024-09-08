import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Footer} from '../components/footer.js';
import Navbar from '../components/navbar2.js';


function MyApp({ Component, pageProps }) {
  return<>
  <Navbar />
   <Component {...pageProps} />
   <Footer/>
  </>
}

export default MyApp
