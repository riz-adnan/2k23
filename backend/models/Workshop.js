const mongoose = require('mongoose');

const model=mongoose.model ;

const Schema = mongoose.Schema;

const workshopSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  mode: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rulebook:{
    type:String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  duration:{
    type: String,
    required: true,
  },
  isChargable: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  cname:{
    type: [String],
    required: true,
  },
  mobileno: {
    type: [String],
    required: true,
  },
  email:{
    type: [String],
    required: true,
  }

  // imageFile: {
  //   data: Buffer,
  //   contentType: String,
  // }
})

const User = mongoose.model("workshopSchema", workshopSchema);
module.exports = User

