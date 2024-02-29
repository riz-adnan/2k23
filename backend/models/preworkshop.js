const mongoose = require('mongoose');

const model=mongoose.model ;

const Schema = mongoose.Schema;

const preWorkshopSchema = new Schema({
    name: {
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
        type:String
    },
    isSpecial:{
        type:String,
    }
})


const User = mongoose.model("preWorkshop", preWorkshopSchema);
module.exports = User
