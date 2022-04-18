// import SSE caching image tag
import styles from "../styles/About.module.css";
import { Image } from "react-bootstrap";
import { Card, Row, Col, Button, Carousel } from "react-bootstrap";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <div>
        <h1 className="white textCenter">About Me:</h1>
      </div>

      <div className="Projects center">
        <h1
          className="textCenter
      white text-underline-hover"
        >
          Project Highlights:
        </h1>
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
                    thumbnail
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
                    quality="100"
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
                  Nothing better than turning a brutal reality of the prarie
                  into a JS game! What is there to say? When the moles pop up,
                  shmack em(CLICK THEIR CUTE LITTLE HEADS) and get points! If
                  you miss 3 of those pesty moles, you are donezo and so is your
                  farm! Get to work !
                </h3>
                <Button>
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

        <div className="ProjectCard">
          <div
            className="card ProjectCard mx-auto justify-content-center"
            style={{ width: "90%" }}
          >
            <div className="row">
              <div className="col-md-6">
                <div className="card-body">
                  <h1 className="card-title">Virtual Marvel Encyclopedia</h1>
                  <p className="card-text">
                    Node.js, Express.js, Marvel API, PostgreSQL
                  </p>
                  <h3 className="card-text">
                    Have you ever been reading a Marvel comic or watching a
                    Marvel movie and did know who a certain character was? No
                    worries! With the Virtual Marvel Encyclopedia, you can
                    simply search and find all you could want to know about
                    thousands of Marvel characters!
                  </h3>
                  <Button>
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
              <div className="col-md-6">
                <Carousel variant="dark">
                  <Carousel.Item>
                    <Image
                      src="/VMEL.png"
                      alt="Virtual Marvel Encyclopedia sign in"
                      width={600}
                      height={500}
                      quality="100"
                      className="overflow-hidden"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      src="/VMELR.png"
                      alt="VME results page"
                      width={600}
                      height={500}
                      quality="100"
                      className="overflow-hidden"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      src="/VMELS.png"
                      alt="VME Search Page"
                      width={600}
                      height={500}
                      quality="100"
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
                <Carousel.Item>
                  <Image
                    src="/pphome.png"
                    alt="Picture of WaM game board"
                    width={600}
                    height={500}
                    quality="100"
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
                  Are you a party person? Have you ever been at home and
                  wondered where the party is at? Well, we got the solution for
                  you! Welcome to Party People! The website where you can see
                  the best parties near you. And if none of them interest you,
                  you can create your own event!
                </h3>
                <span>
                  <Button>
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
      </div>
      <div
        className="textCenter
      white text-underline-hover"
      >
        What I am reading
      </div>
      <div
        className="textCenter
      white text-underline-hover"
      >
        Art Gallery
      </div>
      <div className="row ">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <Image
            src="/Sloth.png"
            alt="Abstract Dog"
            width={500}
            height={600}
            quality="100"
            className="w-100 shadow-1-strong rounded mb-4 border-3 border-white"
            thumbnail
          />
         
         <Image
            src="/abstractDog.png"
            alt="Abstract Dog"
            width={600}
            height={400}
            quality="100"
            className="w-100 shadow-1-strong rounded mb-4 border-3 border-white"
            thumbnail
          />
        
        <Image
            src="/Tac the Tic.png"
            alt="Abstract Dog"
            width={600}
            height={600}
            quality="100"
            className="w-100 shadow-1-strong rounded mb-4 border-3 border-white"
            thumbnail
          />
          <Image
            src="/notSus.png"
            alt="Its not sustainable pop art"
            width={500}
            height={500}
            quality="100"
            className="w-100 shadow-1-strong rounded mb-4 darkBackground overflow-hidden border-3 border-white"
            thumbnail
          />

          <Image
            src="/vLogo.png"
            alt="Viridis Logo"
            width={600}
            height={600}
            quality="100"
            className="w-100 shadow-1-strong rounded mb-4 border-3 border-white"
            thumbnail
          />
          <Image
            src="/me.png"
            alt="Me artist rendering"
            width={600}
            height={600}
            quality="100"
            className="w-100 shadow-1-strong rounded mb-4 border-4 border-white"
            thumbnail
          />
          <Image
            src="/Tom the toe.png"
            alt="Tom the toe"
            width={600}
            height={600}
            quality="100"
            className="w-100 shadow-1-strong rounded mb-4 border-3 border-white"
            thumbnail
          />
          <Image
            src="/ViridisPanda.png"
            alt="Viridis Mascot"
            width={800}
            height={800}
            quality="100"
            className="w-100 shadow-1-strong rounded mb-4 border-3 border-white"
            thumbnail
          />
          <Image
            src="/Render.jpg"
            alt="Viridis Sketches"
            width={800}
            height={800}
            quality="100"
            className="w-100 shadow-1-strong rounded mb-4 border-3 border-white"
            thumbnail
          />
          <Image
            src="/MaskMock.png"
            alt="Viridis Sketches"
            width={500}
            height={500}
            quality="100"
            className="w-100 shadow-1-strong rounded mb-4 border-3 border-white"
            thumbnail
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <Image
            src="/viridisPoster.png"
            alt="Viridis Kickstarted Poster"
            width={600}
            height={900}
            quality="100"
            className="w-100 shadow-1-strong rounded mb-4 border-3 border-white"
            thumbnail
          />
          
          <Image
            src="/Cyclop.png"
            alt="Abstract Dog"
            width={500}
            height={600}
            quality="100"
            className="w-100 shadow-1-strong rounded mb-4 border-3 border-white"
            thumbnail
          />

          <Image
            src="/Ghost.jpeg"
            alt="Ghost kitchen logo"
            width={500}
            height={500}
            quality="100"
            className="w-100 shadow-1-strong rounded mb-4 border-3 border-white"
            thumbnail
          />
          <Image
            src="/BanditRun.png"
            alt="Bandit Run"
            width={500}
            height={300}
            quality="100"
            className="w-100 shadow-1-strong rounded mb-4 border-3 border-white"
            thumbnail
          />
          <Image
            src="/Synct.JPG"
            alt="Synct Logo"
            width={500}
            height={500}
            quality="100"
            className="w-100 shadow-1-strong rounded mb-4 border-3 border-white"
            thumbnail
          />
          <Image
            src="/health.gif"
            alt="3 hearts animated"
            width={500}
            height={300}
            quality="100"
            className="w-100 shadow-1-strong rounded mb-4 border-3 border-white"
            thumbnail
          />
          <Image
            src="/Cactus.JPG"
            alt="Cactus on Owl"
            width={500}
            height={800}
            quality="100"
            className="w-100 shadow-1-strong rounded mb-4 border-3 border-white"
            thumbnail
          />
          <Image
            src="/AnimalFarm.png"
            alt="Monica the Mole (ANIMAL FARM VARIANT)"
            width={500}
            height={600}
            quality="100"
            className="w-100 shadow-1-strong rounded mb-4 border-3 border-white"
            thumbnail
          />
          <Image
            src="/GraveStone.png"
            alt="Farmer (ANIMAL FARM VARIANT)"
            width={500}
            height={600}
            quality="100"
            className="w-100 shadow-1-strong rounded mb-4 border-3 border-white"
            thumbnail
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <Image
            src="/Papgo.jpeg"
            alt="Room animation"
            width={500}
            height={500}
            quality="100"
            className="w-100 shadow-1-strong rounded mb-4 border-3 border-white "
            thumbnail
          />
          <Image
            src="/Room.gif"
            alt="Room animation"
            width={600}
            height={600}
            quality="100"
            className="w-100 shadow-1-strong rounded mb-4 border-3 border-white"
            thumbnail
          />

          <Image
            src="/cbCar.png"
            alt="Camelback Carwash Logo"
            width={600}
            height={600}
            quality="100"
            className="w-100 shadow-1-strong rounded mb-4 border-3 border-white"
            thumbnail
          />

          <Image
            src="/sunnySide.png"
            alt="Sunny Side Logo"
            width={500}
            height={500}
            quality="100"
            className="w-100 shadow-1-strong rounded mb-4 border-3 border-white"
          />
           <Image
            src="/Flowers.png"
            alt="Viridis Flower Pot"
            height={60}
            quality="100"
            className="w-100 shadow-1-strong rounded mb-4 border-3 border-white"
            thumbnail
            style={{ height: 500}}
          />
          <Image
            src="/Shady.png"
            alt="Shady Cartoon"
            width={500}
            height={500}
            quality="100"
            className="w-100 shadow-1-strong rounded mb-4 border-3 border-white"
            thumbnail
          />
          <Image
            src="/Beanstalk.png"
            alt="Viridis Kickstarted Poster"
            width={600}
            height={900}
            quality="100"
            className="w-100 shadow-1-strong rounded mb-4 border-3 border-white"
            thumbnail
          />
          <Image
            src="/Wind.gif"
            alt="Windmill Gif"
            width={600}
            height={600}
            quality="100"
            className="w-100 shadow-1-strong rounded mb-4 border-3 border-white"
            thumbnail
          />
          <Image
            src="/SantaAndFoggy.png"
            alt="Foggy with Santa"
            width={600}
            height={600}
            quality="100"
            className="w-100 shadow-1-strong rounded mb-4 border-3 border-white"
            thumbnail
          />
        </div>
      </div>
    </div>
  );
}
