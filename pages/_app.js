import Navbar from '../components/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Navbar/>
  <main>
  <Component {...pageProps} />
  </main>
<footer>
  ©Triston {new Date().getFullYear()}
</footer>
  </>)
}

export default MyApp
