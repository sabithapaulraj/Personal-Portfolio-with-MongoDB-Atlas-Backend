const express = require('express');
const router = express.Router();
const { getProfile } = require('../controllers/profileController');
const { getProjects } = require('../controllers/projectController');
const { getEducation } = require('../controllers/educationController');

// Define routes
router.get('/profile', getProfile);
router.get('/projects', getProjects);
router.get('/education', getEducation);

module.exports = router;
