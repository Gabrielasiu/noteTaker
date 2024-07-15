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

  let newNote = req.body; //lo que el cliente mande será guardado en la variable newNote
  console.log("newnote:", newNote);
  newNote.id = uuidv4(); //a la nueva nota se le añadirá un id

  let notes = []; //esto no se que pedo, no se por que se pondría o cuando 
  try { //cuando se pone el try/catch?????
    const oldNotes = fs.readFileSync('./db/db.json', 'utf8'); //si hay notas en el archivo db.json, se guardarán en la variable oldNotes
    notes = JSON.parse(oldNotes);// se hará parse de las oldNotes y ya parseada se pasarán a la ariable notes(el nuevo arreglo)
  } catch (err) {
    notes = []; 

  notes.push(newNote); // se agregará la nueva nota al arreglo de oldNotes ya parseado (que ahora se llama notes)
  fs.writeFileSync('./db/db.json', JSON.stringify(notes, null, 2)); //escribirá las notas + nueva nota en el archivo db.json Convierte el arreglo notes en una cadena de texto en formato JSON.

  res.json(newNote); //devuelve la nueva nota en formato json al cliente

  console.log("this is the new note", req.body);
}})

//DELETE Route

app.delete('/api/notes/:id', (req, res) => {
  const noteId = [req.params.id];
  


//fs.readFile leer el archivo
//delete note :id eliminar nota por su id
//fs.writefile reescribir el archivo con la nota eliminada

  // hacerla en offices hours 


})



// // GET Route INDEX HTML

app.get('*', (req, res) => { // el * siempre se pone abajo 

  res.sendFile(path.join(__dirname, '/public/index.html'))
});



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);


