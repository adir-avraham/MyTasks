const express = require('express');
const router = express.Router();
const tasks_controller = require('../controllers/tasks');

const { getTasks } = tasks_controller;


router.get('/getTasks', getTasks); 




module.exports = router;