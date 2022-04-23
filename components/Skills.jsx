import styles from "../styles/About.module.css";
import { Image } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useState } from "react";
import Link from "next/link";



export default function Skills(){
    return(
        <>
    <Card className="SkillCard mx-auto">
      <Card className="SkillBoxOne overflow-hidden">
        <h1 className="Bangers CenterText ">Alias: The Software Arist </h1>
        </Card>
      <Card className="SkillBoxTwo overflow-hidden">
          <h1 className="Bangers CenterText ">Composite:</h1>
      <Image
            src="/HeroRender.png"
            alt="Hero Render of self"
            width={250}
            height={700}
            quality="100"
            thumbnail
          />
        </Card>
      <Card className="SkillBoxThree overflow-hidden">
      <h1 className="Bangers CenterText">Known Information:</h1>
      
        <h2 className="Bangers" >
        Raised in Las Vegas, Triston learned a thing or two about how to stand out amongst other bright lights.
       
        <br />
        <br />
        Triston Palacios is Software Engineer and Artist who is looking to lend his superpowers to a team making a difference. In his previous life before taking up the superhero mantle of <b> THE FANTASTIC SOFTWARE-ARTIST</b> he was a Program Director who leveraged his client first mindset to elvate his program to heights never before imagined!
        </h2>
        </Card>
      <Card className="SkillBoxFour overflow-hidden">
        <h1 className="SuperPowerTitle">Super-Powers:</h1>
        <div className="SuperPowerOne">
        <Image
            src="/REACT.png"
            alt="React"
            width={60}
          />
        </div>
        <div className="SuperPowerTwo">
        <Image
            src="/Swift.png"
            alt="Swift"
            width={60}
          />
        </div>
        <div className="SuperPowerThree">
        <Image
            src="/pyLg.png"
            alt="Python"
            width={60}
          />
        </div>
        <div className="SuperPowerFour">
        <Image
            src="/Realm.svg"
            alt="Node.js"
            width={60}
          />
        </div>
        <div className="SuperPowerFive">
        <Image
            src="/postgreSQL.png"
            alt="Python"
            width={60}
          />
        </div>
        <div className="SuperPowerSix">
        <Image
            src="/mongoDb.jpeg"
            alt="MongoDb"
            width={100}
          />
        </div>
        <div className="SuperPowerSeven">
        <Image
            src="/Node.png"
            alt="Python"
            width={50}
          />
        </div>
        <div className="SuperPowerEight">
        <Image
            src="/Dj.png"
            alt="Python"
            width={50}
          />
        </div>
        <div className="SuperPowerNine">
        <Image
            src="/Office.png"
            alt="Python"
            width={50}
          />
        </div>
       
      </Card>
      <Card className="SkillBoxFive overflow-hidden">
        <h1 className="Bangers CenterText">Notes:</h1>
        <ul className="Bangers">
            <li className="Bangers">Can Code Whole Programs in a single Key Stroke</li>
            <li className="Bangers">Is Currently Reading 
            <ul className="Bangers">
                <li className="Bangers"> For Whom the Bell Tolls</li>
                <li className="Bangers"> Grokking Algorithms</li>
                <li className="Bangers"> Creativity, Inc.</li>
            </ul>
            </li>
            <li className="Bangers"> Is a lifetime student, and is likely trying to learn something new as you read this.</li>
        </ul>
      </Card>
    </Card>
    </>
    )
}
