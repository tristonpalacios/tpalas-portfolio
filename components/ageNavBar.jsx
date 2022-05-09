import Link from "next/link"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import Image from 'next/image'
import { Button } from "react-bootstrap";


export default function AgeNbar({setComicMode, comicMode}){

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
            <Nav.Link className="AgeNav" href="/ageHome" id="myNavItem">Home</Nav.Link>
            
            <Nav.Link className="AgeNav" href="#about" id= "myNavItem">About</Nav.Link>
            <Nav.Link className="AgeNav" href="#projects" id= "myNavItem">Projects</Nav.Link>
            <Nav.Link className="AgeNav" href="#ContactForm" id= "myNavItem">Contact</Nav.Link>
            <Nav.Link className="AgeNav" href="agegallery" id= "myNavItem">Gallery</Nav.Link>
            <Nav.Link className="AgeNav ms-auto" href="/TJP resume.pdf" id= "myNavItem">Resume</Nav.Link>
            <Nav.Link className="AgeNav" href="/" id= "myNavItem">Comic Mode</Nav.Link>
          
            
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
        
    )
}