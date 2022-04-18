import Link from "next/link"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import Image from 'next/image'
import { Button } from "react-bootstrap";

export default function Nbar(){
    return(
        // <nav>
        //     {/* <Link href='/'> Home </Link>
        //     <Link href='/about'>
        //         About Me
        //     </Link> */}
            
            
        // </nav>
        <Navbar className="nav" bg="none" expand="lg" id="myNavbar">
        <Navbar.Brand href="#home"><Image
        src={'/lg.png'}
        alt="TJP logo"
        width={70}
        height={70}
        /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" id="myNavItem">
            <Nav.Link className="text-underline-hover" href="/" id="myNavItem">Home</Nav.Link>
            <Nav.Link className="text-underline-hover" href="contact" id= "myNavItem">Contact</Nav.Link>
            <Nav.Link className="text-underline-hover" href="about" id= "myNavItem">About</Nav.Link>
          </Nav>
          <Button ><a href="/TJP resume.pdf" download="Palacios Resume">
          Résumé
        </a></Button>
          
        </Navbar.Collapse>
      </Navbar>
        
    )
}