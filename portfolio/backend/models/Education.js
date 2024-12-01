const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
    institution: { type: String, required: true },
    degree: { type: String, required: true },
    year: { type: String, required: true },
    description: { type: String } // Optional
});

module.exports = mongoose.model('Education', EducationSchema);
