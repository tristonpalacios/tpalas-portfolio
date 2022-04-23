import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import { Image } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function Footer() {
  return (
    // <nav>
    //     {/* <Link href='/'> Home </Link>
    //     <Link href='/about'>
    //         About Me
    //     </Link> */}

    // </nav>
    <Navbar className="Footer" id="myNavbar">
        <Nav className="container-fluid" id="myNavItem">
        <Nav.Link
            className="FooterLink StandardFont"
            href="mailto:triston.j.palacios@gmail.com?subject=Contact from Portfolio"
            id="myNavItem"
          >
            triston.j.palacios@gmail.com
          </Nav.Link>
          <Nav.Link
            className="FooterLink ms-auto "
            href="https://github.com/tristonpalacios"
            id="GitHub Link"
          >
            <Image
              src="/gitHubIcon.webp"
              alt="Github Link"
              width={50}
              height={50}
              quality="100"
            />
          </Nav.Link>
          <Nav.Link
            className="FooterLink"
            href="https://www.linkedin.com/in/tristonpalacios/"
            id="LinkedIn Link"
          >
            <Image
              src="/linkedIn.png"
              alt="LinkedIn Link"
              width={50}
              height={50}
              quality="100"
            />
          </Nav.Link>
          <Nav.Link
            className="FooterLink"
            href="https://www.instagram.com/tristonjpalacios/"
            id="myNavItem"
          >
            <Image
              src="/Insta.png"
              alt="Ghost kitchen logo"
              width={50}
              height={50}
              quality="100"
            />
          </Nav.Link>
        </Nav>
    </Navbar>
  );
}
