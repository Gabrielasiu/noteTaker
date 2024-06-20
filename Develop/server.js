// Import Express.js
const express = require('express');
const path = require('path');
// const { clog } = require('./middleware/clog');
// const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

// // Import custom middleware, "cLog"
// app.use(clog);

// // Middleware for parsing JSON and urlencoded form data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use('/api', api);


//what the user will see
app.use(express.static('public'));

// GET Route for NOTES HTML
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET Route INDEX HTML
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);


//GET API NOTES DBJSON
//NOSE SI EL PARAMETRO NOTES DATA ES CORERCTO

app.get('/api/notes', (req, res) => {
    // Let the client know that their request was received
    res.json(`${req.method} request received`);
  
    // Show the user agent information in the terminal
    console.info(req.rawHeaders);
  
    // Log our request to the terminal
    console.info(`${req.method} request received`);
  });

// POST API NOTES DBJSON
app.post('/api/notes', (req, res) => {
    // Let the client know that their POST request was received
    res.json(`${req.method} request received`);
  
    // Show the user agent information in the terminal
    console.info(req.rawHeaders);
  
    // Log our request to the terminal
    console.info(`${req.method} request received`);
  });

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
