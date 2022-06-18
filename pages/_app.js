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
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>

      </Head>
      

      <main className="MainApp">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
