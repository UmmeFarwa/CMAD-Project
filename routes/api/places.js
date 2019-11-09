const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const keys = require("../../config/keys");
const Place = require("../../models/places");
var multer = require("multer");
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    console.log(file);
    var filetype = "";
    if (file.mimetype === "image/gif") {
      filetype = "gif";
    }
    if (file.mimetype === "image/png") {
      filetype = "png";
    }
    if (file.mimetype === "image/jpeg") {
      filetype = "jpg";
    }
    cb(null, "image-" + Date.now() + "." + filetype);
  }
});
var upload = multer({ storage: storage });
//Add places
router.post("/addplace", upload.single("file"), (req, res, next) => {
  const place = new Place({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    file: req.file.filename,
    location: req.body.location
  });

  place
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "place added"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});
  //View places
router.get("/viewplaces", (req, res, next) => {
  Place.find()
    .select("title file description price _id location")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        places: docs.map(doc => {
          return {
            title: doc.title,
            price: doc.price,
            file: doc.file,
            description: doc.description,
            location: doc.location,
            _id: doc._id
          };
        })
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;
