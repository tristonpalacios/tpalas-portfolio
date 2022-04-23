import Nbar from "../components/navbar";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/index.scss"; // Add this line
import "../styles/globals.css";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="MainApp">
        
        <Component {...pageProps} />
       
        <footer className="text-center BoldFont">
          ©T.J.P. {new Date().getFullYear()}
        </footer>
        <Footer/>
      </main>
    </>
  );
}

export default MyApp;
