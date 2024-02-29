const mongoose = require('mongoose');

const model=mongoose.model ;

const Schema = mongoose.Schema;

const event_registrationSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    event: {
        type: String,
        required: true,
    },
    sname: {
        type: String,
        required: true,
    },
    
     
    
})


const User = mongoose.model("event_registration", event_registrationSchema);
module.exports = User