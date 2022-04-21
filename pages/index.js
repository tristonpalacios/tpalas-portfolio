import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import { useEffect } from "react";
import { Container,Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import SkillSection from "../components/skillSection";

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
    
        <Image
                    src="/Home.png"
                    alt="Picture of the Monica the Mole"
                    width={2400}
                    height={954}
                    quality={100}
                    priority
                  />
        
      </main>
      <SkillSection/>
     
    </div>
    
  );
}
