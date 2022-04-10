// import SSE caching image tag
import styles from "../styles/About.module.css";
import Image from "next/image";
import { Card, Row, Col, Button, Carousel } from "react-bootstrap";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <div>
        <h1 className="white textCenter">About Me:</h1>
      </div>

     

      

      
      <div className="Projects center">
      <h1 className="textCenter
      white text-underline-hover">Project Highlights:</h1>
        <div
          className="card ProjectCard mx-auto justify-content-center"
          style={{ width: "90%" }}
        >
          <div className="row">
            <div className="col-md-6">
              <Carousel variant="dark">
                <Carousel.Item>
                  <Image
                    src="/Dig.gif"
                    alt="Picture of the Monica the Mole"
                    width={500}
                    height={500}
                  />
                </Carousel.Item>
                <Carousel.Item>
                <Image
                    src="/Farmer.gif"
                    alt="Picture of the Farmer Joe"
                    width={500}
                    height={500}
                  />
                </Carousel.Item>
                <Carousel.Item>
                <Image
                    src="/Whack.png"
                    alt="Picture of WaM game board"
                    width={600}
                    height={500}
                    quality='100'
                    className="overflow-hidden"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h1 className="card-title">Whack-a-Mole!</h1>
                <p className="card-text">JavaScript, HTML , CSS</p>
                <h3 className="card-text">
                  Nothing better than turning a brutal reality of the prarie into a JS game! What is there to say? When the moles pop up, shmack em(CLICK THEIR CUTE LITTLE HEADS) and get points! If you miss 3 of those pesty moles, you are donezo and so is your farm! Get to work !
                 
                </h3>
                <Button><Link href='https://tristonpalacios.github.io/WaM/'>Check it out!</Link></Button>
                <span className="paddingButton">
                <Button className="varButton"><Link href='https://github.com/tristonpalacios/WaM'>Github Repo</Link></Button>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="ProjectCard">
            
          <div
            className="card ProjectCard mx-auto justify-content-center"
            style={{ width: "90%" }}
          >
            <div className="row">
              <div className="col-md-6">
                <div className="card-body">
                  <h1 className="card-title">Virtual Marvel Encyclopedia</h1>
                  <p className="card-text">Node.js, Express.js, Marvel API, PostgreSQL</p>
                  <h3 className="card-text">
                    Have you ever been reading a Marvel comic or watching a Marvel movie and did know who a certain character was? No worries! With the Virtual Marvel Encyclopedia, you can simply search and find all you could want to know about thousands of Marvel characters! 
                  </h3>
                  <Button><Link href='https://virtual-marvel-encyclopedia.herokuapp.com/users/new'>Check it out!</Link></Button>

                  <span className="paddingButton">
                <Button className="varButton"><Link href='https://github.com/tristonpalacios/Virtual-Marvel-Encyclopedia'>Github Repo</Link></Button>
                </span>
                  
                </div>
              </div>
              <div className="col-md-6">
              <Carousel variant="dark">
                <Carousel.Item>
                  <Image
                    src="/VMEL.png"
                    alt="Virtual Marvel Encyclopedia sign in"
                    width={600}
                    height={500}
                    quality='100'
                    className="overflow-hidden"
                  />
                </Carousel.Item>
                <Carousel.Item>
                <Image
                    src="/VMELR.png"
                    alt="VME results page"
                    width={600}
                    height={500}
                    quality='100'
                    className="overflow-hidden"
                  />
                </Carousel.Item>
                <Carousel.Item>
                <Image
                    src="/VMELS.png"
                    alt="VME Search Page"
                    width={600}
                    height={500}
                    quality='100'
                    className="overflow-hidden"
                  />
                </Carousel.Item>
              </Carousel>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card ProjectCard mx-auto justify-content-center"
          style={{ width: "90%" }}
        >
          <div className="row">
            <div className="col-md-6">
            <Carousel variant="dark">
                <Carousel.Item className="rounded-0">
                  <Image
                    src="/pp.gif"
                    alt="Party People Logo"
                    width={500}
                    height={500}
                    className="darkBackground overflow-hidden"
                  />
                </Carousel.Item>
                <Carousel.Item>
                <Image
                    src="/hype.gif"
                    alt="Picture of the Farmer Joe"
                    width={500}
                    height={500}
                    className="darkBackground overflow-hidden"
                  />
                </Carousel.Item>
                <Carousel.Item >
                <Image
                    src="/pphome.png"
                    alt="Picture of WaM game board"
                    width={600}
                    height={500}
                    quality='100'
                    className="overflow-hidden"
                   
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h1 className="card-title">Party People</h1>
                <p className="card-text">React.js , MongoDB, Mapbox </p>
                <h3 className="card-text">
                Are you a party person? Have you ever been at home and wondered where the party's at? Well, we got the solution for you! Welcome to Party People! The website where you can see the best parties near you. And if none of them interest you, you can create your own event!
                </h3>
                <span>
                <Button><Link href='https://party-people-app.netlify.app/'>Check it out!</Link></Button>
                </span>
                <span className="paddingButton">
                <Button className="varButton"><Link href='https://github.com/tristonpalacios/party-people-client'>Github Repo</Link></Button>
                </span>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="textCenter
      white text-underline-hover">What I am reading</div>
      <div className="textCenter
      white text-underline-hover">Art Gallery</div>
    </div>
    
  );
}
