import { useState } from "react";
import { FormGroup, Image } from "react-bootstrap";


export default function AgeContactForm() {
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
        
        <p className="SubmittedMessage mx-auto ">Signal Sent!</p>
        </div>;
    } else {
      return (
        <div className="card-body ">
          <h1 className="card-title ContactCardTitle AgeFont">Contact Me.</h1>
          {/* <p className="card-text">
            Node.js, Express.js, Marvel API, PostgreSQL
          </p> */}
          <form className="">
            <FormGroup>
              <label htmlFor="name" className="inputLabel AgeFont">
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
              />
            </FormGroup>
            <br />
            <FormGroup>
              <label htmlFor="email" className="inputLabel AgeFont">
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
              />
            </FormGroup>
            <br />
            <FormGroup>
              <label htmlFor="message" className="inputLabel AgeFont">
                Message:
              </label>
              <br />
              <textarea
                className="inputTextArea"
                type="text"
                name="message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                style={{ height: 100, width: 200 }}
              />
            </FormGroup>
            <br />
            <input
              className="AgeFont"
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
      className="card AgeContactCard mx-auto justify-content-center"
      style={{ width: "90%" }}
    >
      <div className="row">
        <div className="col-md-6 ContactForm">{renderSendButton()}</div>
        <div className="col-md-6 PhotoArea">
          <Image
            src="images/randomart.png"
            alt="Tjp Signal"
            quality="100"
            className="overflow-hidden contactImage "
          />
        </div>
      </div>
    </div>
  );
}
