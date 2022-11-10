const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: String,  
  lastName: String,
  maidenName: String, 
  age: Number,
  gender: String,     
  email:  String,
  phone: String,      
  username: String,
  password: String,   
  birthDate: String,
  profileIMG: String,         
  ip: String,
  address: {
    address: String,
    city: String,
    coordinates: {
      lat: Number,
      lng: Number
    },
    postalCode: String,
    state: String
  },
  bank: {
    cardExpire: String,
    cardNumber: String,
    cardType: String,
    currency : String,
    iban: String
  },
  recentAuctions: [],
  userAuctions: [],
  pastAuctions: [],
  currentAuctions: [] 
});

const User = mongoose.model('Users', UserSchema);

module.exports = User;