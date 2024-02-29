const mongoose = require('mongoose');

const model=mongoose.model ;

const Schema = mongoose.Schema;

const preeventSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    registrationlink: {
        type: String,
        required: true,
    },
    sname: {
        type: String,
        required: true,
    },
    rulebook: {
        type: String
    },
    date: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
    },
    isSpecial:{
        type:String,
    }
    
})


const User = mongoose.model("preevent", preeventSchema);
module.exports = User