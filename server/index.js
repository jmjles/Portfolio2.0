const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(bodyparser.json());
app.use(cors());


// Api Location
const port = '5000';
const clicker = require('./routes/api/clicker-game.js');
app.use('/api/clicker-game', clicker);

// Launch Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    
});