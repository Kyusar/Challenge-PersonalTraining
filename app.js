const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(express.json());

// Import Routes
const postsRoute = require("./routes/posts");

//Middleware
app.use("/posts", postsRoute);

//ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

// Connect to db
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
// How to listen to the server
app.listen(3000);
