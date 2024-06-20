
//GET API NOTES DBJSON
//NOSE SI EL PARAMETRO NOTES DATA ES CORERCTO
const express = require('express');
const router = express.Router();
const app = express();
//const notesRouter = require('./notes');

// AQUI PUSE LO MISMO QUE ESTÁ EN LAS LINEAS 
// 37-58 EN EL ARCHIVO SERVER JSON. SOLAMENTE
// NO SE SI AQUI SE TIENE QUE DEJAR AQUI O LO DEJO ALLÁ 


app.get('/notes', (req, res) => {
    // Let the client know that their request was received
    res.json(`${req.method} request received`);
  
    // Show the user agent information in the terminal
    console.info(req.rawHeaders);
  
    // Log our request to the terminal
    console.info(`${req.method} request received`);
  });

// POST API NOTES DBJSON
app.post('/notes', (req, res) => {
    // Let the client know that their POST request was received
    res.json(`${req.method} request received`);
  
    // Show the user agent information in the terminal
    console.info(req.rawHeaders);
  
    // Log our request to the terminal
    console.info(`${req.method} request received`);
  });

  module.exports = router;