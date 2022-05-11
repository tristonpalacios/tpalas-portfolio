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
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Bangers&family=Bebas+Neue&family=Comic+Neue:ital,wght@1,700&family=Titillium+Web:ital,wght@0,900;1,400&display=swap" rel="stylesheet"></link>
      </Head>
      

      <main className="MainApp">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
