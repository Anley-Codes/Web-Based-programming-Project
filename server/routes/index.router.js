
const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/infopage.controllers');
router.post('/register', ctrlUser.register);

module.exports = router;