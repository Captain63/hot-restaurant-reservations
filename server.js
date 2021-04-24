// Dependencies

const express = require("express");
const path = require("path");

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Table Reservations Array (empty on initialization)
const reservations = [];

// Table Waitlist Array (empty on initialization)
const waitList = [];

// Routes

//Routes to display HTML pages
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));


// Logic for adding POST to reservations/wait list


// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));