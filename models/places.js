const mongoose = require('mongoose');

const PlaceSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
  type: String,
  required: true
   },
  file:{
    type: String,
    required: true
  },
  location:{
    type: String,
    required: true
  }
});

const Places = mongoose.model('Places', PlaceSchema);

module.exports = Places;