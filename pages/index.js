import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Projects from "./projects";
import About from "./about";
import ComicNbar from "../components/comicNavbar";
import Skills from "../components/ComicSkills";
import ContactForm from "../components/ComicContactForm";
import Footer from "../components/comicFooter";

export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <div>
      <Head>
        <title>Triston J. Palacios Portfolio</title>
        <meta name="TJP portfolio" content="Triston Palacios Portfolio Site" />
        <link rel="icon" href="images/lg.png" />
      </Head>
      
      <div>
      <main className="ComicApp">
        <ComicNbar />
        <Image
          src="/../public/images/HomePagePhoto.png"
          alt="Comic Rendition of introduction to self"
          width={2400}
          height={954}
          quality={100}
          priority
        />

        <div id="about">
          <About />
          <Skills />
        </div>

        <div id="projects">
          <Projects />
        </div>
        <div id="ContactForm">
          <ContactForm />
        </div>
        <footer className="text-center BoldFont">
          ©T.J.P. {new Date().getFullYear()}
        </footer>
        <Footer />
      </main>
      </div>
    </div>
  );
}

const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)
    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })
  return {
    props: {
      posts
    }
  }
}
