const express = require('express');
const router = express.Router();
const tasks_controller = require('../controllers/cases');

const { getCases } = tasks_controller;


router.get('/getCases', getCases); 




module.exports = router;