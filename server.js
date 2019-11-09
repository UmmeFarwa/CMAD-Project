const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require('path');
const users = require("./routes/api/users");
const places = require("./routes/api/places");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());


// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    {  useUnifiedTopology: true ,
      useNewUrlParser: true }

  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"

  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});
app.use(express.static('./public/uploads'))
// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/places", places);


if (process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'client' , 'build', 'index.html'));
  });
}
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));