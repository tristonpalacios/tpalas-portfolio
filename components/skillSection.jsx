import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function SkillSection(){
    return(
        <>
        <h1 className="white text-center">I'm the man for projects including:</h1>
      <div className="skillSection">
        
        <Card className="skillCard">
          <Card.Img className="cardImg" variant="top" src="/jslogo.png" />
          <Card.Title className="text-center dNavy cardFont">Javascript</Card.Title>
        </Card>
        <Card className="skillCard" >
          <Card.Img className="cardImg" variant="top" src="/pyLg.png" />
          <Card.Title className="text-center dNavy cardFont">Python</Card.Title>
        </Card>
        <Card className="skillCard">
          <Card.Img className="cardImg" variant="top" src="/postgreSQL.png" />
          <Card.Title className="text-center dNavy cardFont">PostgreSQL</Card.Title>
        </Card>
        <Card className="skillCard">
          <Card.Img className="cardImg" variant="top" src="/mongoDb.jpeg" />
          <Card.Title className="text-center dNavy cardFont">MongoDb</Card.Title>
        </Card>
        <Card className="skillCard">
          <Card.Img className="cardImg" variant="top" src="/http.png" />
          <Card.Title className="text-center dNavy cardFont">HTTP://</Card.Title>
        </Card>
        <Card className="skillCard" >
          <Card.Img className="cardImg" variant="top" src="/REST.webp" />
          <Card.Title className="text-center dNavy cardFont">RESTful</Card.Title>
        </Card>
        <Card className="skillCard">
          <Card.Img className="cardImg" variant="top" src="/JSON.png" />
          <Card.Title className="text-center dNavy cardFont">JSON</Card.Title>
        </Card>
        <Card className="skillCard">
          <Card.Img className="cardImg" variant="top" src="/REACT.png" />
          <Card.Title className="text-center dNavy cardFont">React.js</Card.Title>
        </Card>
        <Card className="skillCard">
          <Card.Img className="cardImg" variant="top" src="/HTML.webp" />
          <Card.Title className="text-center dNavy cardFont">HTML</Card.Title>
        </Card>
        <Card className="skillCard">
          <Card.Img className="cardImg" variant="top" src="/CSS.png" />
          <Card.Title className="text-center dNavy cardFont">CSS</Card.Title>
        </Card>
        <Card className="skillCard">
          <Card.Img className="cardImg" variant="top" src="/Node.png" />
          <Card.Title className="text-center dNavy cardFont">Node.js</Card.Title>
        </Card>
        <Card className="skillCard">
          <Card.Img className="cardImg" variant="top" src="/Dj.png" />
          <Card.Title className="text-center dNavy cardFont">Django</Card.Title>
        </Card>
        <Card className="skillCard">
          <Card.Img className="cardImg" variant="top" src="/Git.png" />
          <Card.Title className="text-center dNavy cardFont">Github</Card.Title>
        </Card>
        <Card className="skillCard">
          <Card.Img className="cardImg" variant="top" src="/Gi.png" />
          <Card.Title className="text-center dNavy cardFont">git</Card.Title>
        </Card>
        <Card className="skillCard">
          <Card.Img className="cardImg" variant="top" src="/hero.png" />
          <Card.Title className="text-center dNavy cardFont">Heroku</Card.Title>
        </Card>
        <Card className="skillCard">
          <Card.Img className="cardImg" variant="top" src="/netlify.png" />
          <Card.Title className="text-center dNavy cardFont">Netlify</Card.Title>
        </Card>
        <Card className="skillCard">
          <Card.Img className="cardImg" variant="top" src="/ps.png" />
          <Card.Title className="text-center dNavy cardFont">Photoshop</Card.Title>
        </Card>
        <Card className="skillCard">
          <Card.Img className="cardImg" variant="top" src="/procreate.png" />
          <Card.Title className="text-center dNavy cardFont">Procreate</Card.Title>
        </Card>
        <Card className="skillCard">
          <Card.Img className="cardImg" variant="top" src="/Next.png" />
          <Card.Title className="text-center dNavy cardFont">Next.js</Card.Title>
        </Card>
        <Card className="skillCard">
          <Card.Img className="cardImg" variant="top" src="/Office.png" />
          <Card.Title className="text-center dNavy cardFont">MS Office</Card.Title>
        </Card>
      </div>

      </>
    )
}