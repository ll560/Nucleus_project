const express = require('express');
const router = express.Router();

const siteRoutes = require('./siteRoutes');
const adminRoutes= require('./adminRoutes');
const admissionsRoutes = require('./admissionsRoutes');
const surveyRoutes = require('./surveyRoutes');
const resourcesRoutes = require('./resourcesRoutes');
const studyRoutes = require('./studyRoutes');

router.use('/', siteRoutes);
router.use('/admin', adminRoutes);
router.use('/admissions', admissionsRoutes);
router.use('/survey', surveyRoutes);
router.use('/resources', resourcesRoutes);
router.use('/study', studyRoutes);

module.exports = router;