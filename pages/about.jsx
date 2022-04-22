// import SSE caching image tag
import styles from "../styles/About.module.css";
import { Image } from "react-bootstrap";
import { Card, Row, Col, Button, Carousel } from "react-bootstrap";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <div>
        <h1 className="white textCenter">About Me:</h1>
      </div>

     
      <div
        className="textCenter
      white text-underline-hover"
      >
        
        What I am reading
      </div>
      
    </div>
  );
}
