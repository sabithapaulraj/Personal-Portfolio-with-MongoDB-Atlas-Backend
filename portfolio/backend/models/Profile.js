const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bio: { type: String, required: true },
    linkedin: { type: String },
    github: { type: String },
    email: { type: String, required: true },
    profilePicture: { type: String } // Optional
});

module.exports = mongoose.model('Profile', ProfileSchema,'profiles');
