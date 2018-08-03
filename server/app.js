const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello Earth!');
})

module.exports = app




