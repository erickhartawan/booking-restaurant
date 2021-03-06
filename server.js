const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Server started on port ${port}`));
