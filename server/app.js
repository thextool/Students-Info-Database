const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const students = require('./routes/students-profile')

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/students', students)


app.get('/', (req, res) => {
    res.send('Hello Earth!');
})

app.use((req, res, next) => {
    const err = new Error("Not Found");
    res.status(404);
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: req.app.get("env") === "development" ? err.stack : {}
    });
});

module.exports = app

