require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const sequelize = require("./src/models/index");
const initRoute = require("./src/routes");

// Connect to the database
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Routes
initRoute(app);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
