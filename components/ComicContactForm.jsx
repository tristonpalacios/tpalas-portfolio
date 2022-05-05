import { useState } from "react";
import styles from "../styles/About.module.css";
import { Image, Form, FormGroup } from "react-bootstrap";
import { Card, Row, Col, Button, Carousel } from "react-bootstrap";
import Link from "next/link";
import Head from "next/head";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(!submitted)
    console.log("Sending");
    let data = {
      name,
      email,
      message,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      console.log(res.status)
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setBody("");
      }
    });
  };

  const renderSendButton = () => {
    if (submitted) {
      return <div className="card-body ">
        
        <p className="SubmittedMessage mx-auto">Signal Sent!</p>
        </div>;
    } else {
      return (
        <div className="card-body ">
          <h1 className="card-title ContactCardTitle">Send me a signal!</h1>
          {/* <p className="card-text">
            Node.js, Express.js, Marvel API, PostgreSQL
          </p> */}
          <form className="">
            <FormGroup>
              <label htmlFor="name" className="inputLabel">
                Name:
              </label>
              <br />
              <input
                className="inputField"
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                name="name"
                placeholder='Your secret identity'
              />
            </FormGroup>
            <br />
            <FormGroup>
              <label htmlFor="email" className="inputLabel">
                Email:
              </label>
              <br />
              <input
                className="inputField"
                type="email"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="TJPfan01@email,com"
              />
            </FormGroup>
            <br />
            <FormGroup>
              <label htmlFor="message" className="inputLabel">
                Message:
              </label>
              <br />
              <textarea
                className="messageField"
                type="text"
                name="message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
               
              />
            </FormGroup>
            <br />
            <input
              className="SubmitButton"
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
            />
          </form>
        </div>
      );
    }
  };
  return (
    <div
      className="card ContactCard mx-auto justify-content-center"
      style={{ width: "90%" }}
    >
      <div className="row">
        <div className="col-md-6 ContactForm">{renderSendButton()}</div>
        <div className="col-md-6 PhotoArea">
          <Image
            src="/TJPSignal.png"
            alt="Tjp Signal"
            quality="100"
            className="overflow-hidden contactImage "
          />
        </div>
      </div>
    </div>
  );
}
