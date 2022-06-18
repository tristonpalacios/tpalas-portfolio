import styles from "../styles/About.module.css";
import { Image } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useState } from "react";
import Link from "next/link";

export default function Skills() {
  return (
    <>
      <Card className="SkillCard mx-auto">
        <Card className="SkillBoxOne overflow-hidden">
          <h1 className="Bangers CenterText ">Alias: The Software Artist </h1>
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

          <h2 className="Bangers">
            Triston Palacios is an Software Engineer and Artist who is an
            extreme danger to any coding bugs or uninspired projects that dare
            step in his path. Our reports indicate that in his previous life,
            before taking up the superhero alias of{" "}
            <b> THE FANTASTIC SOFTWARE-ARTIST</b> he was a Program Director who
            used his client first mindset and methodical approach to lead his
            teams to achieve the impossible time and time again! Nowadays
            Triston has been seen whipping up exciting projects and refining his
            Software Engineering skillset.
            <br />
            <br />
            Recent sightings of the Software Artist indicate that he is
            currently freelancing and looking for new opportunities to make
            something great!
          </h2>
        </Card>
        <Card className="SkillBoxFour overflow-hidden">
          <h1 className="SuperPowerTitle mx-auto">Super-Powers:</h1>

          <div className="SuperPowerOne">
            <Image src="/REACT.png" alt="React" className="skillPhoto" />
          </div>
          <div className="SuperPowerTwo">
            <Image src="/Swift.png" alt="Swift" className="skillPhoto" />
          </div>
          <div className="SuperPowerThree">
            <Image src="/pyLg.png" alt="Python" className="skillPhoto" />
          </div>
          <div className="SuperPowerFour">
            <Image src="/Realm.svg" alt="Node.js" className="skillPhoto" />
          </div>
          <div className="SuperPowerFive">
            <Image src="/postgreSQL.png" alt="Python" className="skillPhoto" />
          </div>
          <div className="SuperPowerSix">
            <Image src="/mongoDb.jpeg" alt="MongoDb" width={120} />
          </div>
          <div className="SuperPowerSeven">
            <Image src="/Node.png" alt="Python" className="skillPhoto" />
          </div>
          <div className="SuperPowerEight">
            <Image src="/Dj.png" alt="Python" className="skillPhoto" />
          </div>
          <div className="SuperPowerNine">
            <Image src="/Office.png" alt="Python" className="skillPhoto" />
          </div>
        </Card>
        <Card className="SkillBoxFive overflow-hidden">
          <h1 className="Bangers CenterText">Notes:</h1>
          <ul className="Bangers">
            <li className="Bangers">
              Can Code Whole Programs in a single Key Stroke
            </li>
            <li className="Bangers">
              Is Currently Reading
              <ul className="Bangers">
                <li className="Bangers"> <a
                    target="_blank"
                    href="https://www.audible.com/pd/Fooled-by-Randomness-Audiobook/B002V8H28C?ref=a_library_t_c5_libItem_&pf_rd_p=80765e81-b10a-4f33-b1d3-ffb87793d047&pf_rd_r=9HC0RZN2A9E2WCP3F89W"
                    rel="noopener noreferrer"
                  > Fooled by Randomness
                  </a></li>
                <li className="Bangers"> <a
                    target="_blank"
                    href="https://www.audible.com/pd/The-Elements-of-Style-Recorded-Books-Edition-Audiobook/B002V1NRTW?ref=a_library_t_c5_libItem_&pf_rd_p=80765e81-b10a-4f33-b1d3-ffb87793d047&pf_rd_r=9HC0RZN2A9E2WCP3F89W"
                    rel="noopener noreferrer"
                  > Elements of Style
                  </a></li>
                <li className="Bangers">
                  <a
                    target="_blank"
                    href="https://www.audible.com/pd/Creativity-Inc-Audiobook/B00IPK3BWQ?ref=a_library_t_c5_libItem_&pf_rd_p=80765e81-b10a-4f33-b1d3-ffb87793d047&pf_rd_r=9HC0RZN2A9E2WCP3F89W"
                    rel="noopener noreferrer"
                  > Creativity, Inc.
                  </a>
                </li>
              </ul>
            </li>
            <li className="Bangers">
              {" "}
              Is a lifetime student, and is likely trying to learn something new
              as you read this.
            </li>
          </ul>
        </Card>
      </Card>
    </>
  );
}
