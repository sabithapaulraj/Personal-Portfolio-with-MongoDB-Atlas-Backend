
const Education = require('../models/Education');

// Get all education entries
exports.getEducation = async (req, res) => {
    try {
        const education = await Education.find();
        res.status(200).json(education);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};
