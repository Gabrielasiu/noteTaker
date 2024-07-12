// // Import Express.js
const express = require('express');
const path = require('path');
const fs = require('fs');
const { clearScreenDown } = require('readline');
// const api = require('./routes/index.js');
// const notesRouter = require('./notes');
const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('api/notes', notesRouter);

//what the user will see
app.use(express.static('public'));


// GET Route for NOTES HTML
app.get('/notes', (req, res) => { 

  res.sendFile(path.join(__dirname, '/public/notes.html'))
  
});



// //GET API NOTES DBJSON
// //NOSE SI EL PARAMETRO NOTES DATA ES CORERCTO

app.get('/api/notes', (req, res) => {
    
  fs.readFile('./db/db.json', (err, results) => {
     if (err) {
      throw err
     }
let listedNotes = JSON.parse(results);
console.log("notes", listedNotes);
res.json(listedNotes);

  })
});

//POST 

app.post('/api/notes', (req, res) => {

  console.log("this is the new note", req.body);
 

});

// // GET Route INDEX HTML

app.get('*', (req, res) => { // el * siempre se pone abajo 

  res.sendFile(path.join(__dirname, '/public/index.html'))
 });



// const notesRouter = require('./routes/notes')


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);


