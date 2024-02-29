// Caution: Don't change the names of the fields in the schema.

const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },

    college_state: {
        type: String,
        required: true,
    },
    college_city: {
        type: String,
        required: true,
    },
    college_name: {
        type: String,
        required: true,
    },
    facebook_id: {
        type: String,
    },
    instagram_id: {
        type: String,
    },
    referral_code: {
        type: String,
    },
});

userSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', userSchema);

module.exports = User;
