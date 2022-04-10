import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
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
      <main className={styles.main}>
        <h1>Top of the morning!</h1>
        <h1>I'm Triston Palacios.</h1>
        <h1>A Software Engineer</h1>
        <a href="/TJP resume.pdf" download="my resume">
          My Resume
        </a>
      </main>
      <SkillSection/>
     
    </div>
    
  );
}
