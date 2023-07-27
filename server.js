const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require("dotenv").config(); // Load environment variables from .env file

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/", function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const subject = "New message from your NodeMailer!";
  const message = req.body.message;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.USER,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: process.env.ACCESS_TOKEN,
    },
  });

  const mailOptions = {
    from: `${name} <${email}>`,
    to: process.env.USER,
    subject: subject,
    text: `${message} ${email}`,
  };

  console.log("Transporter called");

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log("Error occurred: ", err);
    } else {
      console.log("Message Sent: ", info.response);
    }
  });
});

app.use(express.static("build"));

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Express server is up on port ${port}`);
});
