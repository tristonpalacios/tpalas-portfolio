import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Projects from "./projects";
import About from "./about";
import ComicNbar from "../components/comicNavbar";
import Skills from "../components/ComicSkills";
import ContactForm from "../components/ComicContactForm";
import Footer from "../components/comicFooter";
import { useState } from "react";
import AgeNbar from "../components/ageNavBar";
import AgeAbout from "../components/ageAbout";
import AgeProjects from "../components/ageProjects";
import AgeContactForm from "../components/AgeContact";

export default function ageHome () {


    return(
        <main className="AgeApp">
        <AgeNbar />
        <AgeAbout/>
        <div id="projects">
            <AgeProjects />
          </div>
          <div id="ContactForm">
            <AgeContactForm />
          </div>
        </main>) 
}