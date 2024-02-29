const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const merchandise_purchase = new Schema({
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
    merchandise: {
        type: String,
        required: true,
    },
    size: {
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


const User = mongoose.model("merchandise", merchandise_purchase);
module.exports = User