const Profile = require('../models/Profile');

const getProfile = async (req, res) => {
    try {
        const profile = await Profile.findOne();  // Find the first profile document
        if (!profile) {
            return res.status(404).json({ message: 'Profile not found' });
        }
        res.json(profile);  // Return profile data if found
    } catch (error) {
        console.error('Error fetching profile:', error);
        res.status(500).json({ message: 'Failed to fetch profile data' });
    }
};

module.exports = { getProfile };
