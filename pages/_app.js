import Nbar from '../components/navbar'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/index.scss"; // Add this line
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

  
  return (
  <>
   <Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   
    </Head>   
  <Nbar/>
 
  <main>
  <Component {...pageProps} />
  </main>
  <br/>
<footer className='text-center gold'>
  ©T.J.P. {new Date().getFullYear()}
</footer>
  </>)
}

export default MyApp
