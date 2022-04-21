import styles from "../styles/About.module.css";
import { Image } from "react-bootstrap";
import { Card, Row, Col, Button, Carousel, Modal } from "react-bootstrap";
import { useState } from "react";
import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";
import Link from "next/link";

export default function Contact() {
    const [show, setShow] = useState(false);
    const [imgIndex, setImgIndex] = useState(0)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const displayPic = (picNumber)=>{
        setShow
        setImgIndex(picNumber)

    }

    let images = [
        {
            url:"/Sloth.png",
            title:"Sloth Viridis Ad"
        },
        {
            url:"/abstractDog.png",
            title:"Abstract Dog"
        },
        {
            url:"/Tac the Tic.png",
            title:"Tac the Tic"
        },
        {
            url:"/notSus.png",
            title:"Not Sustainable Sticker"
        },
        {
            url:"/vLogo.png",
            title:"Viridis Aeternum Logo"
        },
        {
            url:"/me.png",
            title:"Me Cartoon Rendition"
        },
        {
            url:"/Tom the toe.png",
            title:"Tom The Toe"
        },
        {
            url:"/ViridisPanda.png",
            title:"Viridis Panda"
        },
        {
            url:"/Render.jpg",
            title:"Viridis Mockup Render"
        },
        {
            url:"/MaskMock.png",
            title:"Virdis UV Mask Mockup"
        },
        {
            url:"/viridisPoster.png",
            title:"Virdis Kickstarter Poster"
        },
        {
            url:"/Cyclop.png",
            title:"Clyclops Sticker"
        },
        {
            url:"/Ghost.jpeg",
            title:"Ghost Kitchen Logo"
        },{
            url:"/BanditRun.png",
            title:"Bandit Run Starting Screen"
        },
        {
            url:"/Synct.jpg",
            title:"Synct Logo"
        },
        {
            url:"/health.gif",
            title:"3 hearts WaM gif"
        },
        {
            url:"/Cactus.jpg",
            title:"Virdis Cactus Sticker"
        },
        {
            url:"/AnimalFarm.png",
            title:"Monica the Mole (Animal Farm Variant)"
        },
        {
            url:"/GraveStone.png",
            title:"Farmer(Animal Farm Variant)"
        },
        {
            url:"/Papgo.jpeg",
            title:"PapagoSticker"
        },
        {
            url:"/Room.gif",
            title:"Cartoon Gif of office"
        },
        {
            url:"/cbCar.png",
            title:"Camelback Carwash Logo"
        },
        {
            url:"/sunnySide.png",
            title:"SunnySide Logo"
        },
        {
            url:"/Flowers.png",
            title:"Viridis Aeternum FlowerPot Sticker"
        },
        {
            url:"/Shady.png",
            title:"Shady Cartoon"
        },
        {
            url:"/BeanStalk.png",
            title:"Viridis Beanstalk Poster"
        },
        {
            url:"/Wind.gif",
            title:"Animal Farm Windmill"
        },
        {
            url:"/SantaAndFoggy.png",
            title:"Foggy with Santa"
        },
    ]
  return (
    <div className="Container">
        <div className="galleryTitle">
            <Image
            src="/Visions.png"
            alt="Abstract Dog"
            quality="100"
            className="w-100 mb-4" 
          />
          </div>
        
    <div className="row ">
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <Image
            src="/Sloth.png"
            alt="Abstract Dog"
            width={500}
            height={600}
            quality="100"
            className="w-100 mb-4 galleryPhotoOne"
            onClick={() => { setImgIndex(0); handleShow();}}
            thumbnail
            
          />

          <Image
            src="/abstractDog.png"
            alt="Abstract Dog"
            width={600}
            height={400}
            quality="100"
            className="w-100 mb-4 galleryPhotoTwo"
            thumbnail
            onClick={() => { setImgIndex(1); handleShow();}}
          />
           <Image
            src="/Tac the Tic.png"
            alt="Abstract Dog"
            width={600}
            height={600}
            quality="100"
            className="w-100 mb-4 galleryPhotoThree"
            thumbnail
            onClick={() => { setImgIndex(2); handleShow();}}
          />
          <Image
            src="/notSus.png"
            alt="Its not sustainable pop art"
            width={500}
            height={500}
            quality="100"
            className="w-100 mb-4 galleryPhotoFour"
            thumbnail
            onClick={() => { setImgIndex(3); handleShow();}}
          />

          <Image
            src="/vLogo.png"
            alt="Viridis Logo"
            width={600}
            height={600}
            quality="100"
            className="w-100 mb-4 galleryPhotoFive"
            thumbnail
            onClick={() => { setImgIndex(4); handleShow();}}
          />
          <Image
            src="/me.png"
            alt="Me artist rendering"
            width={600}
            height={600}
            quality="100"
            className="w-100 mb-4 galleryPhotoOne"
            thumbnail
            onClick={() => { setImgIndex(5); handleShow();}}
          />
          <Image
            src="/Tom the toe.png"
            alt="Tom the toe"
            width={600}
            height={600}
            quality="100"
            className="w-100 mb-4 galleryPhotoTwo"
            thumbnail
            onClick={() => { setImgIndex(6); handleShow();}}
          />
          <Image
            src="/ViridisPanda.png"
            alt="Viridis Mascot"
            width={800}
            height={800}
            quality="100"
            className="w-100 mb-4 galleryPhotoThree"
            thumbnail
            onClick={() => { setImgIndex(7); handleShow();}}
          />
          <Image
            src="/Render.jpg"
            alt="Viridis Sketches"
            width={800}
            height={800}
            quality="100"
            className="w-100 mb-4 galleryPhotoFour"
            thumbnail
            onClick={() => { setImgIndex(8); handleShow();}}
          />
          <Image
            src="/MaskMock.png"
            alt="Viridis Sketches"
            width={500}
            height={500}
            quality="100"
            className="w-100 mb-4 galleryPhotoFive"
            thumbnail
            onClick={() => { setImgIndex(9); handleShow();}}
          />

        </div>
        <div className="col-lg-4 mb-4 mb-lg-0">
          <Image
            src="/viridisPoster.png"
            alt="Viridis Kickstarted Poster"
            width={600}
            height={900}
            quality="100"
            className="w-100 mb-4 galleryPhotoFive"
            thumbnail
            onClick={() => { setImgIndex(10); handleShow();}}
          />

          <Image
            src="/Cyclop.png"
            alt="Abstract Dog"
            width={500}
            height={600}
            quality="100"
            className="w-100 mb-4 galleryPhotoFour"
            thumbnail
            onClick={() => { setImgIndex(11); handleShow();}}
          />

          <Image
            src="/Ghost.jpeg"
            alt="Ghost kitchen logo"
            width={500}
            height={500}
            quality="100"
            className="w-100 mb-4 galleryPhotoThree"
            thumbnail
            onClick={() => { setImgIndex(12); handleShow();}}
          />
          <Image
            src="/BanditRun.png"
            alt="Bandit Run"
            width={500}
            height={300}
            quality="100"
            className="w-100 mb-4 galleryPhotoTwo"
            thumbnail
            onClick={() => { setImgIndex(13); handleShow();}}
          />
          <Image
            src="/Synct.jpg"
            alt="Synct Logo"
            width={500}
            height={500}
            quality="100"
            className="w-100 mb-4 galleryPhotoOne"
            thumbnail
            onClick={() => { setImgIndex(14); handleShow();}}
          />
          <Image
            src="/health.gif"
            alt="3 hearts animated"
            width={500}
            height={300}
            quality="100"
            className="w-100 mb-4 galleryPhotoFive"
            thumbnail
            onClick={() => { setImgIndex(15); handleShow();}}
          />
          <Image
            src="/Cactus.jpg"
            alt="Cactus on Owl"
            width={500}
            height={800}
            quality="100"
            className="w-100 mb-4 galleryPhotoFour"
            thumbnail
            onClick={() => { setImgIndex(16); handleShow();}}
          />
          <Image
            src="/AnimalFarm.png"
            alt="Monica the Mole (ANIMAL FARM VARIANT)"
            width={500}
            height={600}
            quality="100"
            className="w-100 mb-4 galleryPhotoThree"
            thumbnail
            onClick={() => { setImgIndex(17); handleShow();}}
          />
          <Image
            src="/GraveStone.png"
            alt="Farmer (ANIMAL FARM VARIANT)"
            width={500}
            height={600}
            quality="100"
            className="w-100 mb-4 galleryPhotoTwo"
            thumbnail
            onClick={() => { setImgIndex(18); handleShow();}}
          />
        </div>
        <div className="col-lg-4 mb-4 mb-lg-0">
          <Image
            src="/Papgo.jpeg"
            alt="Room animation"
            width={500}
            height={500}
            quality="100"
            className="w-100 mb-4 galleryPhotoThree"
            thumbnail
            onClick={() => { setImgIndex(19); handleShow();}}
          />
          <Image
            src="/Room.gif"
            alt="Room animation"
            width={600}
            height={600}
            quality="100"
            className="w-100 mb-4 galleryPhotoTwo"
            thumbnail
            onClick={() => { setImgIndex(20); handleShow();}}
          />

          <Image
            src="/cbCar.png"
            alt="Camelback Carwash Logo"
            width={600}
            height={600}
            quality="100"
            className="w-100 mb-4 galleryPhotoOne"
            thumbnail
            onClick={() => { setImgIndex(21); handleShow();}}
          />

          <Image
            src="/sunnySide.png"
            alt="Sunny Side Logo"
            width={500}
            height={500}
            quality="100"
            className="w-100 mb-4 galleryPhotoFive"
            thumbnail
            onClick={() => { setImgIndex(22); handleShow();}}
          />
          <Image
            src="/Flowers.png"
            alt="Viridis Flower Pot"
            height={60}
            quality="100"
            className="w-100 mb-4 galleryPhotoFour"
            thumbnail
            onClick={() => { setImgIndex(23); handleShow();}}
          />
          <Image
            src="/Shady.png"
            alt="Shady Cartoon"
            width={500}
            height={500}
            quality="100"
            className="w-100 mb-4 galleryPhotoThree"
            thumbnail
            onClick={() => { setImgIndex(24); handleShow();}}
          />
          <Image
            src="/Beanstalk.png"
            alt="Viridis Kickstarted Poster"
            width={600}
            height={900}
            quality="100"
            className="w-100 mb-4 galleryPhotoTwo"
            thumbnail
            onClick={() => { setImgIndex(25); handleShow();}}
          />
          <Image
            src="/Wind.gif"
            alt="Windmill Gif"
            width={600}
            height={600}
            quality="100"
            className="w-100 mb-4 galleryPhotoOne"
            thumbnail
            onClick={() => { setImgIndex(26); handleShow();}}
          />
          <Image
            src="/SantaAndFoggy.png"
            alt="Foggy with Santa"
            width={600}
            height={600}
            quality="100"
            className="w-100 mb-4 galleryPhotoFive"
            thumbnail
            onClick={() => { setImgIndex(27); handleShow();}}
          />
        </div>

      </div>
      <Modal show={show} onHide={handleClose}>
        <Lightbox images={images} startIndex={imgIndex} onClose={handleClose}></Lightbox>
        </Modal>
      </div>
     
    
    
    
  );
}