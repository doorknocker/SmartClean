const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const jwt = require("jwt-simple");
const moment = require("moment");
// var uniqid = require("uniqid");

const auth = require("./server/services/auth");

const app = express();

const port = process.env.PORT || 4000;
const secret = process.env.SECRET || "YOUR_SECRET_STRING";

app.use(express.static("build"));

app.use(bodyParser.json());

app.set("jwtTokenSecret", secret);

app.post("/v1/api/signin", (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400).send("Email is not provided");
  }
  if (!password) {
    return res.status(400).send("Password is not provided");
  }
  if (email !== "admin@smartclean.sg") {
    return res.status(400).send("Email is not correct");
  }
  if (password !== "smartclean") {
    return res.status(400).send("Password is not correct");
  }
  var expires = moment().add("days", 7).valueOf();
  var token = jwt.encode(
    {
      iss: "admin@smartclean.sg",
      exp: expires,
    },
    app.get("jwtTokenSecret")
  );

  return res.send({
    token: token,
    expires: expires,
  });
});

app.get("/v1/api/user", auth, (req, res) => {
  return res.send({
    name: "Lav Agarwal",
    position: "CEO & Founder",
  });
});

app.get("/v1/api/clean-data", (req, res) => {
  res.sendFile(path.join(__dirname + "/server/static/data.json"));
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.listen(port, () => {
  console.log("Server is running on " + port + " port");
});
