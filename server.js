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

// Routes for serving HTML

//Routes to display HTML pages
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));


// Routes for serving Table data
app.get('/api/reservations', (req, res) => {
    // If there are no existing reservations, returns false for the client-side JS to then handle
    if (reservations.length === 0) {
        return res.json(false);
    }

    // Returns array of reservation objects for client-side JS to handle
    return res.json(reservations);
});

app.get('/api/waitlist', (req, res) => {
    // If there are no existing waitlist positions, returns false for the client-side JS to then handle
    if (waitList.length === 0) {
        return res.json(false);
    }

    // Returns array of waitlist positions for client-side JS to handle
    return res.json(waitList);
});

// Logic for adding POST to reservations/wait list


// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));