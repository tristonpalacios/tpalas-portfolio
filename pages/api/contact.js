require('dotenv').config()
const PASSWORD = process.env.password
import Head from 'next/head'

export default function Contact (req, res) {
    require('dotenv').config()
    
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: 'tpalasportfolio@gmail.com',
        pass: process.env.password,
      },
      secure: true,
    })
    const mailData = {
      from: 'tpalasportfolio@gmail.com',
      to: 'triston.j.palacios@gmail.com',
      subject: `Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email}</p>`
    }
    transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
    res.status(200)
  }