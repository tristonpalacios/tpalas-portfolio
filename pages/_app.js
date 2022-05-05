import Nbar from "../components/comicNavbar";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/index.scss"; // Add this line
import "../styles/globals.css";
import Footer from "../components/comicFooter";


function MyApp({ Component, pageProps }) {

 
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="MainApp">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
