import styles from "../styles/About.module.css";
import { Image } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useState } from "react";
import Link from "next/link";



export default function Skills(){
    return(
        <>
    <Card className="SkillCard mx-auto">
      <Card className="SkillBoxOne">
        <h1>Name: Triston Palacios</h1>
        </Card>
      <Card className="SkillBoxTwo">
          <h1>Hero Render:</h1>
      <Image
            src="/HeroRender.png"
            alt="Its not sustainable pop art"
            width={250}
            height={700}
            quality="100"
            thumbnail
          />
        </Card>
      <Card className="SkillBoxThree">
      <h1>Bio:</h1>
        <p>
        Raised in Las Vegas, Triston learned a thing or two about what makes a person tick, and how to stand out amongst other bright lights.
       
        <br />
        <br />
        Triston Palacios is Software Engineer and Artist who is looking to lend his superpowers to a team making a difference. In his previous life before taking up the superhero mantle of <b> THE FANTASTIC SOFTWARE-ARTIST</b> he was a Program Director who leveraged his client first mindset to elvate his program to heights never before imagined!
        </p>
        </Card>
      <Card className="SkillBoxFour">
        <h1 className="SuperPowerTitle">Super-Powers:</h1>
        <div className="SuperPowerOne">
        <Image
            src="/pyLg.png"
            alt="Python"
            width={30}
          />
        </div>
        <div className="SuperPowerTwo">
        <Image
            src="/pyLg.png"
            alt="Python"
            width={30}
          />
        </div>
        <div className="SuperPowerThree">
        <Image
            src="/pyLg.png"
            alt="Python"
            width={30}
          />
        </div>
        <div className="SuperPowerFour">
        <Image
            src="/pyLg.png"
            alt="Python"
            width={30}
          />
        </div>
        <div className="SuperPowerFive">
        <Image
            src="/pyLg.png"
            alt="Python"
            width={30}
          />
        </div>
        <div className="SuperPowerSix">
        <Image
            src="/pyLg.png"
            alt="Python"
            width={30}
          />
        </div>
        <div className="SuperPowerSeven">
        <Image
            src="/pyLg.png"
            alt="Python"
            width={30}
          />
        </div>
        <div className="SuperPowerEight">
        <Image
            src="/pyLg.png"
            alt="Python"
            width={30}
          />
        </div>
        <div className="SuperPowerNine">
        <Image
            src="/pyLg.png"
            alt="Python"
            width={30}
          />
        </div>
       
      </Card>
      <Card className="SkillBoxFive">
        <h1>Notes:</h1>
      </Card>
    </Card>
    </>
    )
}
