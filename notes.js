/*CORE MODULES */
const fs = require("fs");
const chalk = require("chalk");

//Function to add a note to the existing notes
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((notes) => {
    return notes.title === title;
  });

  //debugger;

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    savedNotes(notes);
    console.log("Note added");
  } else {
    console.log("Note title taken!");
  }
};

//Function to remove a note from existing notes
const removeNote = (title) => {
  const notes = loadNotes();

  const prevLength = Object.keys(notes).length;
  const deleteRequest = notes.filter((notes) => {
    return notes.title !== title;
  });

  const newLength = Object.keys(deleteRequest).length;
  if (prevLength === newLength) {
    console.log(chalk.black.bgRed("No note found!"));
  } else if (deleteRequest.length >= 0) {
    savedNotes(deleteRequest);
    console.log(chalk.black.bgGreen("Note Removed!"));
  } else {
    console.log(chalk.black.bgRed("No note found!"));
  }
};

//Function to list all the notes present
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.black.bgCyanBright("Your Notes!"));
  notes.forEach((notes) => {
    console.log(notes.title);
  });
};

//Function to read a note
const readNote = (title) => {
  const notes = loadNotes();
  const applicableNote = notes.find((note) => {
    return note.title === title;
  });

  if (applicableNote) {
    console.log(chalk.inverse(applicableNote.title));
    console.log(chalk.bold(applicableNote.body));
  } else {
    console.log(chalk.red("No Note found!"));
  }
};

//Helper functions
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const savedNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

//xporting all the required modules
module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
