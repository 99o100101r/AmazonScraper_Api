// import express from "express";
const express = require("express"); //to make app
const request = require("request-promise"); // to make api call

const app = express();
const PORT = 5000;

app.use(express.json()); // middleware to parse json input

app.get("/", (req, res) => {
  res.send("sab changa si");
});

app.listen(PORT, () => {
  console.log("my app is working");
});
