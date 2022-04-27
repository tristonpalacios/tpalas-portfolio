import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Projects from "./projects";
import About from "./about";
import Nbar from "../components/navbar";
import Skills from "../components/Skills";
import ContactForm from "../components/ContactForm";
import Footer from "../components/footer";


export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <div>
      <Head>
        <title>Triston J. Palacios Portfolio</title>
        <meta name="TJP portfolio" content="Triston Palacios Portfolio Site" />
        <link rel="icon" href="/lg.png" />
      </Head>
      <main >
      <Nbar/>
        <Image
                    src="/HomePagePhoto.png"
                    alt="Comic Rendition of introduction to self"
                    width={2400}
                    height={954}
                    quality={100}
                    priority
                  />
      {/* <SkillSection/> */}
        
      </main>
      <div id="about">
      <About />
      <Skills/>

      </div>
      
      <div id="projects">
      <Projects />
      
      </div>
      <div>
      <ContactForm/>        
      </div>
      
      <footer className="text-center BoldFont">
          ©T.J.P. {new Date().getFullYear()}
        </footer>
        <Footer/>
    </div>
    
  );
}
