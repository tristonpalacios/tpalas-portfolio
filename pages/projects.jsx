import styles from "../styles/About.module.css";
import { Image } from "react-bootstrap";
import { Card, Row, Col, Button, Carousel } from "react-bootstrap";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <div className="Projects">
        <h1
          className="textCenter
      white subheading"
        >
          Project Spotlight
        </h1>
        <div
          className="card ProjectCard mx-auto justify-content-center"
          style={{ width: "90%" }}
        >
          <div className="row">
            <div className="col-md-6 ">
              <Carousel variant="dark">
                <Carousel.Item>
                  <Image
                    src="/Dig.gif"
                    alt="Picture of the Monica the Mole"
                    width={500}
                    height={500}
                    className="ProjectImage"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src="/Farmer.gif"
                    alt="Picture of the Farmer Joe"
                    width={500}
                    height={500}
                    className="ProjectImage"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src="/Whack.png"
                    alt="Picture of WaM game board"
                    width={500}
                    height={500}
                    quality="100"
                    className="ProjectImage"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h1 className="card-title">Whack-a-Mole!</h1>
                <p className="card-text">
                  <Image
                    src="/jslogo.png"
                    alt="JavaScript"
                    width={70}
                    height={50}
                    quality="100"
                  />
                  <Image src="/HTML.webp" alt="HTML" width={50} height={50} />{" "}
                  <Image src="/CSS.png" alt="CSS" width={50} height={50} />
                  <Image src="/Git.png" alt="Git Hub" width={50} height={50} />
                </p>
                <h3 className="card-text StandardFont">
                  Nothing better than turning a brutal reality of the prarie
                  into a JS game! What is there to say? When the moles pop up,
                  shmack em(CLICK THEIR CUTE LITTLE HEADS) and get points! If
                  you miss 3 of those pesty moles, you are donezo and so is your
                  farm! Get to work !
                </h3>
                <h3 className="BoldFont">Project Highlights</h3>
                <ul>
                  <li>Dozens of self-made custom art assets</li>
                  <li>Complex Win/Lose Logic</li>
                  <li>Easter Egg</li>
                </ul>
                <Button className="varButton">
                  <Link href="https://tristonpalacios.github.io/WaM/">
                    Check it out!
                  </Link>
                </Button>
                <span className="paddingButton">
                  <Button className="varButton">
                    <Link href="https://github.com/tristonpalacios/WaM">
                      Github Repo
                    </Link>
                  </Button>
                </span>
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
              <div className="card-body">
                <h1 className="card-title">Virtual Marvel Encyclopedia</h1>
                {/* <p className="card-text">
                    Node.js, Express.js, Marvel API, PostgreSQL
                  </p> */}

                <Image
                  src="/Node.png"
                  alt="Node.js"
                  width={50}
                  height={50}
                  quality="100"
                />

                <Image
                  src="/postgreSQL.png"
                  alt="Mongo Db"
                  width={50}
                  height={50}
                />
                <Image src="/Hero.png" alt="Heroku" width={50} height={50} />
                <Image
                  src="/MarvelLogo.png"
                  alt="Heroku"
                  width={70}
                  height={50}
                />
                <h3 className="card-text">
                  Have you ever been reading a Marvel comic or watching a Marvel
                  movie and did know who a certain character was? No worries!
                  With the Virtual Marvel Encyclopedia, you can simply search
                  and find all you could want to know about thousands of Marvel
                  characters!
                </h3>
                <h3 className="BoldFont">Project Highlights</h3>
                <ul>
                  <li>Use of the official Marvel API</li>
                  <li>
                    Fully Implemted User Auth System, including data encryption
                  </li>
                  <li>PostgreSQL implementation</li>
                </ul>
                <Button className="varButton">
                  <Link href="https://virtual-marvel-encyclopedia.herokuapp.com/users/new">
                    Check it out!
                  </Link>
                </Button>

                <span className="paddingButton">
                  <Button className="varButton">
                    <Link href="https://github.com/tristonpalacios/Virtual-Marvel-Encyclopedia">
                      Github Repo
                    </Link>
                  </Button>
                </span>
              </div>
            </div>
            <div className="col-md-6 PhotoArea">
              <Carousel variant="dark">
                <Carousel.Item>
                  <Image
                    src="/VMEL.png"
                    alt="Virtual Marvel Encyclopedia sign in"
                    width={600}
                    height={600}
                    quality="100"
                    className="overflow-hidden ProjectImage"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src="/VMELR.png"
                    alt="VME results page"
                    width={600}
                    height={600}
                    quality="100"
                    className="overflow-hidden ProjectImage"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src="/VMELS.png"
                    alt="VME Search Page"
                    quality="100"
                    className="overflow-hidden ProjectImage"
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
          <div className="col-md-6 PhotoArea">
            <Carousel variant="dark">
              <Carousel.Item>
                <Image
                  src="/PP.gif"
                  alt="Party People Logo"
                  className=" darkBackground overflow-hidden ProjectImage"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src="/hype.gif"
                  alt="Picture of the Farmer Joe"
                  width={600}
                  height={600}
                  className=" darkBackground overflow-hidden ProjectImage"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src="/pphome.png"
                  alt="Picture of WaM game board"
                  width={600}
                  height={600}
                  className=" darkBackground overflow-hidden ProjectImage"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h1 className="card-title">Party People</h1>
              <p className="card-text">
                <Image
                  src="/REACT.png"
                  alt="REACT"
                  width={50}
                  height={50}
                  quality="100"
                />
                <Image
                  src="/mongoDb.jpeg"
                  alt="Mongo Db"
                  width={50}
                  height={50}
                />{" "}
                <Image
                  src="/postman.webp"
                  alt="Postman"
                  width={50}
                  height={50}
                />
                <Image src="/netlify.png" alt="MapBox" width={50} height={50} />
              </p>
              <h3 className="card-text">
                Are you a party person? Have you ever been at home and wondered
                where the party is at? Well, we got the solution for you!
                Welcome to Party People! The website where you can see the best
                parties near you. And if none of them interest you, you can
                create your own event!
              </h3>
              <h3 className="BoldFont">Project Highlights</h3>
              <ul>
                <li>Custom art assets for Hype Meter, Logo, and Background</li>
                <li>Mapbox Implementation</li>
                <li>Created utilizing team SCRUM workflow</li>
                <li>Mongoose DB</li>
              </ul>
              <span>
                <Button className="varButton">
                  <Link href="https://party-people-app.netlify.app/">
                    Check it out!
                  </Link>
                </Button>
              </span>
              <span className="paddingButton">
                <Button className="varButton">
                  <Link href="https://github.com/tristonpalacios/party-people-client">
                    Github Repo
                  </Link>
                </Button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="ProjectCard mx-auto " style={{ width: "90%" }}>
        <div className="row">
          <div className="col-md-6 ">
            <div className="card-body">
              <h1 className="card-title">Petit Ami</h1>
              {/* <p className="card-text">
                    Node.js, Express.js, Marvel API, PostgreSQL
                  </p> */}

              <Image
                src="/Swift.png"
                alt="Swift"
                width={50}
                height={50}
                quality="100"
              />

              <Image src="/Realm.svg" alt="Realm" width={50} height={50} />
              <Image src="/XCode.png" alt="X Code" width={50} height={50} />
              <Image
                src="/procreate.png"
                alt="Pro Create"
                width={50}
                height={50}
              />
              <h3 className="card-text">
                Have you ever wanted to put your pet in your pocket and take it
                with you? Well, now you can! With Petit Ami an iOS Native app,
                you can now get your very own small friend that lives in your
                pocket! Our app allows you to adopt your very own Petit Ami and
                watch it grow and evolve from the egg state. But be mindful,
                keeping a pet is no easy task, and you will have to keep your
                Ami fed, loved, and clean for it to grow.
              </h3>
              <h3 className="BoldFont">Project Highlights</h3>
              <ul>
                <li>Over 35 self-made custom art assets</li>
                <li>Fully Functional Dev Build created in under 10 days</li>
                <li>Created utilizing team SCRUM workflow</li>
                <li>
                  Complex conditional logic to dictate happiness and evolution
                  of Ami
                </li>
                <li>
                  Petit Ami is fully functional, but still in active devolpment
                  and awaiting launch on the Apple App Store, stay tuned for
                  more updates!{" "}
                </li>
              </ul>
              <Button className="varButton">
                <Link href="https://virtual-marvel-encyclopedia.herokuapp.com/users/new">
                  Check it out!
                </Link>
              </Button>

              <span className="paddingButton">
                <Button className="varButton">
                  <Link href="https://github.com/zbrose/petit-ami-upstream">
                    Github Repo
                  </Link>
                </Button>
              </span>
            </div>
          </div>
          <div className="col-md-6 PhotoArea">
            <Carousel variant="dark">
              <Carousel.Item>
                <Image
                  src="/Petit Ami Mock Up.png"
                  alt="Petit Ami Mock Up"
                  width={700}
                  height={700}
                  quality="100"
                  className="ProjectImage"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src="/TeenEat.gif"
                  alt="VME results page"
                  width={700}
                  height={700}
                  quality="100"
                  className="ProjectImage"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src="/BabySleep.gif"
                  alt="VME Search Page"
                  quality="100"
                  className="ProjectImage"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
