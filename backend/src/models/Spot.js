const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId, //id de user
    ref: 'User' //referencia para o model User
  }
});

module.exports = mongoose.model('Spot', SpotSchema);