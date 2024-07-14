// // Import Express.js
const express = require('express');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//what the user will see
app.use(express.static('public'));


// GET Route for NOTES HTML
app.get('/notes', (req, res) => {

  res.sendFile(path.join(__dirname, '/public/notes.html'))

});


//GET API NOTES DBJSON

app.get('/api/notes', (req, res) => {

  fs.readFile('./db/db.json', (err, results) => {
    if (err) {
      throw err
    }
    let listedNotes = JSON.parse(results);
    // console.log("notes", listedNotes);
    res.json(listedNotes);

  })
});

//POST Route 

app.post('/api/notes', (req, res) => {

  let newNote = req.body;
  console.log("newnote:", newNote);
  newNote.id = uuidv4();

  let notes = [];
  try {
    const data = fs.readFileSync('./db/db.json', 'utf8');
    notes = JSON.parse(data);
  } catch (err) {
    notes = [];
  }

  notes.push(newNote);
  fs.writeFileSync('./db/db.json', JSON.stringify(notes, null, 2));

  res.json(newNote);

  console.log("this is the new note", req.body);
})




// // GET Route INDEX HTML

app.get('*', (req, res) => { // el * siempre se pone abajo 

  res.sendFile(path.join(__dirname, '/public/index.html'))
});



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);


