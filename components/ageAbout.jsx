// import SSE caching image tag
import styles from "../styles/About.module.css";
import { Image } from "react-bootstrap";
import { Card, Row, Col, Button, Carousel } from "react-bootstrap";
import Link from "next/link";

export default function AgeAbout() {
  return (
    <div className="AgeAboutSection">
      <div className="AgeAboutBlurb">
        {" "}
        <h1 className="AboutTitle">Triston Palacios</h1>{" "}
        <div className="AgeFont">Software engineer and artist</div>
        <div className="AgeFont"><h1> 
          <a href="https://github.com/tristonpalacios">
                  <Image src="/gitHubWhite.png" alt="HTML" width={50} height={50} />{" "}
          </a>  
          <a href="https://www.linkedin.com/in/tristonpalacios/">
                  <Image src="/LinkedWhite.png" alt="HTML" width={50} height={50} />{" "}
          </a>  
          <a href="https://www.instagram.com/tristonjpalacios/">
                  <Image src="/InstaWhite.png" alt="HTML" width={50} height={50} />{" "}
          </a>  
          </h1>
        </div>
      </div>
      <Image src="/AgeSelfie.png" alt="Selfie" className="AgeAboutPhoto" />
    </div>
  );
}
