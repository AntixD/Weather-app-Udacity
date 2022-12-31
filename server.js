// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 3000;

const server = app.listen(port, ()=> {
    console.log(`Running on http://localhost:${port}`);
});

//Get data to the main page console
app.get('/', (req, res)=> {
    res.send(projectData);
});

//Post data from the API to a local URL
data = {};

app.post('/api', (req, res)=> {
    Object.assign(data, req.body);
    res.send(data);
});

//Get data from the API on the local URL
app.get('/api', (req, res)=> {
    res.send(data);
    console.log(data);
});