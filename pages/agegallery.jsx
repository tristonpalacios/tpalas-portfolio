import styles from "../styles/About.module.css";
import { Image } from "react-bootstrap";
import { Card, Row, Col, Button, Carousel, Modal } from "react-bootstrap";
import { useState } from "react";
import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";
import Link from "next/link";
import GalleryNbar from "../components/comicGalleryNav";
import AgeGalleryNbar from "../components/ageGallerNav";
import AgeGallery from "../components/ageGallery";

export default function ageGallery() {
   
  return (
    <div >
   <AgeGallery/>
      </div>
     
    
    
    
  );
}