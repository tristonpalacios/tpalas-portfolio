import Link from "next/link"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import Image from 'next/image'
import { Button } from "react-bootstrap";

export default function AgeGalleryNbar(){
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
            <Nav.Link className="AgeNav" href="ageHome" id="myNavItem">Home</Nav.Link> 
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
        
    )
}