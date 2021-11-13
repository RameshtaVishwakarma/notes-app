
# Node.js Notes Application

The project is a simple Notes Application which provides user with 4 functionalities 
namely
- Add: To add a note in the the database.
- Remove: Remove a note from the database.
- List: To list down every note recorded.
- Read: Read a particular note.

The data is stored in the form of JSON.


## Badges

Dependencies used in the Project: 

[![yargs](https://img.shields.io/badge/yargs-npm%20package-orange)](https://www.npmjs.com/package/yargs)
[![chalk](https://img.shields.io/badge/chalk-npm%20package-blue)](https://www.npmjs.com/package/chalk)
[![validator](https://img.shields.io/badge/validator-npm%20package-yellow)](https://www.npmjs.com/package/validator)


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd notes-app
```

Install dependencies

```bash
  npm install
```



## List of commands to perform operations:

Add a note to the database:

```bash
  node app.js add --title="Your note title" --body="Your note body"
```

Remove a note from the database

```bash
  node app.js remove --title="Your note title"
```

List all the notes in the database:

```bash
  node app.js List
```

Read a note:

```bash
  node app.js read --title="Your note title"
```


## Tech Stack

**Server:** Node

