var express = require("express");
var nodemailer = require("nodemailer");
var bodyParser = require("body-parser");
var env = require("body-parser");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/", function(req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var subject = "New message from your NodeMailer!";
  var message = req.body.message;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    port: 25,
    auth: {
      type: process.env.TYPE,
      user: process.env.USER,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: process.env.ACCESS_TOKEN
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let HelperOptions = {
    from: name + " " + "<" + email + ">",
    to: process.env.USER,
    subject: subject,
    text: message + " " + email
  };

  console.log("Transporter called");

  transporter.sendMail(HelperOptions, function(err, res) {
    if (err) {
      console.log("error");
    } else {
      console.log("Message Sent");
    }
  });
});

app.use(express.static("public"));

app.listen(3000, function() {
  console.log("Express server is up on port 3000");
});
