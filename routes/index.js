
const express = require('express');

// Import our modular router for notes

const router = express.Router();
const notesRouter = require('./notes');

router.use('/notes',notesRouter);


module.exports = router;


