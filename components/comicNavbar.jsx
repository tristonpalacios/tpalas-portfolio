import Link from "next/link"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import Image from 'next/image'
import { Button } from "react-bootstrap";


export default function ComicNbar({setComicMode, comicMode}){

      const changeView = () =>{
        setComicMode(!comicMode)
      }

    return(
        // <nav>
        //     {/* <Link href='/'> Home </Link>
        //     <Link href='/about'>
        //         About Me
        //     </Link> */}
            
            
        // </nav>
        <Navbar className="nav" bg="none" expand="lg" id="myNavbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container-fluid" id="myNavItem">
            <Nav.Link className="text-underline-hover" href="/" id="myNavItem">Home</Nav.Link>
            
            <Nav.Link className="text-underline-hover" href="#about" id= "myNavItem">About</Nav.Link>
            <Nav.Link className="text-underline-hover" href="#projects" id= "myNavItem">Projects</Nav.Link>
            <Nav.Link className="text-underline-hover" href="#ContactForm" id= "myNavItem">Contact</Nav.Link>
            <Nav.Link className="text-underline-hover" href="gallery" id= "myNavItem">Gallery</Nav.Link>
            <Nav.Link className="text-underline-hover ms-auto" href="/TJP resume.pdf" id= "myNavItem">Resume</Nav.Link>
            {/* <button onClick={changeView}>Change View</button> */}
            
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
        
    )
}