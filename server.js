const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// importing routes
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");

app.use(cors(corsOptions));
app.use(bodyParser.json());

// connecting to Database

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// use routes

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
