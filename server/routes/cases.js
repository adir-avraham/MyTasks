const express = require('express');
const router = express.Router();
const cases_controller = require('../controllers/cases');

const { getCases } = cases_controller;
const {addNewCase } = cases_controller;

router.get('/getCases', getCases); 
router.post('/addNewCase', addNewCase);



module.exports = router;