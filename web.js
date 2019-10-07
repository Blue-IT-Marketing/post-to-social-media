const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 5001;

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json());

// adding cors
app.use(cors());

// define a simple route
app.get('/', (req, res) => {    
    res.send('this is an article api good luck')
});


// listening for requests
app.listen(PORT).on('listening', () => {
    console.log(`Social Media API Running on Port  ${PORT} `);    
});


