const express = require('express');
const router = express.Router();

const accomodations = require('./accomodations');

router
    .route('/accomodations')
    .get(accomodations.accomodationGetAll);

module.exports = router;