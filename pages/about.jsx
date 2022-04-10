// import SSE caching image tag
import styles from "../styles/About.module.css";
import Image from "next/image";
import { Card, Row, Col, Button } from "react-bootstrap";

export default function About() {
  return (
    <div>
      <div>
        <h1>I am Triston Palacios, a software engineer.</h1>
      </div>

      <div>A history</div>


      <div>What I am reading</div>

      <div>What I am creating</div>
      <div className="Projects center">
        <div className="card ProjectCard mx-auto justify-content-center" style={{ width: "90%" }}>
          <div className="row">
            <div className="col-md-6">
              <svg
                className="bd-placeholder-img"
                width="100%"
                height="250"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Placeholder: Image"
                preserveAspectRatio="xMidYMid slice"
                role="img"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#868e96" />
                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                  Taco
                </text>
              </svg>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h1 className="card-title">Whack-a-Mole!</h1>
                <p className="card-text">JavaScript, HTML , CSS</p>
                <p className="card-text">
                  <small className="text-muted">Card Text 2</small>
                </p>
              </div>
            </div>
          </div>
      </div>


      <div className="ProjectCard">
        <div className="card ProjectCard mx-auto justify-content-center" style={{ width: "90%" }}>
          <div className="row">
          <div className="col-md-6">
              <div className="card-body">
                <h1 className="card-title">Virtual Marvel Encyclopedia</h1>
                <p className="card-text">JavaScript, HTML , CSS</p>
                <p className="card-text">
                  <small className="text-muted">Card Text 2</small>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <svg
                className="bd-placeholder-img"
                width="100%"
                height="250"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Placeholder: Image"
                preserveAspectRatio="xMidYMid slice"
                role="img"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#868e96" />
                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                  Taco
                </text>
              </svg>
            </div>
           
          </div>
        </div>
      </div>
      <div className="card ProjectCard mx-auto justify-content-center" style={{ width: "90%" }}>
          <div className="row">
            <div className="col-md-6">
              <svg
                className="bd-placeholder-img"
                width="100%"
                height="250"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Placeholder: Image"
                preserveAspectRatio="xMidYMid slice"
                role="img"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#868e96" />
                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                  Taco
                </text>
              </svg>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h1 className="card-title">Party People</h1>
                <p className="card-text">JavaScript, HTML , CSS</p>
                <p className="card-text">
                  <small className="text-muted">Card Text 2</small>
                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
    </div>
  );
}
