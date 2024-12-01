const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    techStack: { type: [String], required: true }, // Array of technologies
    liveLink: { type: String },
    repoLink: { type: String },
    image: { type: String } // Optional
});

module.exports = mongoose.model('Project', ProjectSchema);
