const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const proShow_registration = new Schema({
    name:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true,
    },
    email: {
        type: String,
        required: true,
    },
    paymentId:{
        type:String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    amount:{
        type:Number,
        required:true,
    }
})


const User = mongoose.model("proshow", proShow_registration);
module.exports = User