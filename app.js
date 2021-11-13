/* COREE MODULES */
const validator = require("validator");
const notes = require("./notes.js");
const yargs = require("yargs");
const { argv } = require("yargs");

/*customizing yargs version */
yargs.version("1.0.0");
// console.log(yargs.argv);

/* Create add command */
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

/* create remove command */
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

/* Create List command */
yargs.command({
  command: "list",
  describe: "List all the notes",
  handler: function () {
    notes.listNotes();
  },
});

/* Create read Command */
yargs.command({
  command: "read",
  describe: "Read a note!",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.readNote(argv.title);
  },
});

/*Goes through the process of configuration and prints the arguments
only once. */
yargs.parse();
