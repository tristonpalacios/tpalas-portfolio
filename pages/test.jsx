import styles from "../styles/About.module.css";
import { Image } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  return (
    <>
    <Card className="SkillCard mx-auto">
      <Card className="SkillBoxOne">
        <h1>Bio:</h1>
        <p>
        Raised in Las Vegas, Triston learned a thing or two about what makes a person tick, and how to stand out amongst other bright lights.
       
        <br />
        <br />
        Triston Palacios is Software Engineer and Artist who is looking to lend his superpowers to a team making a difference. In his previous life before taking up the superhero mantle of <b> THE FANTASTIC SOFTWARE-ARTIST</b> he was a Program Director who leveraged his client first mindset to elvate his program to heights never before imagined!
        </p>
        </Card>
      <Card className="SkillBoxTwo">
        <h1>Powers And Abilities: </h1>
        </Card>
      <Card className="SkillBoxThree">
        <h1>Stats:</h1>
        </Card>
      <Card className="SkillBoxFour">
        <h1>Notes:</h1>
      </Card>
    </Card>
    </>
    
  );
}
