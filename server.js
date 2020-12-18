const express = require("express");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");

// Model
const Workout = require("./models/index");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

require("./routes/htmlroutes.js")(app);

// Initializing Server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});