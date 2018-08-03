const express = require('express')
const router = express.Router()

const queries = require('../queries')

router.get('/', (req, res, next) => {
    queries.getAll()
    .then(studentsInfo => {res.json(studentsInfo)})
    .catch(next)
})

router.get('/:id', (req, res, next) => {
    console.log(req.params)
    queries.getById(req.params.id)
    .then(studentInfo => {res.json(studentInfo)})
    .catch(next)
})

router.get('/lastname/:last_name', (req, res, next) => {
    console.log(req.params)
    queries.getByLastName(req.params.last_name)
    .then(studentName => {res.json(studentName)})
    .catch(next)
})

router.post('/', (req, res, next) => {
    queries.addStudent(req.body)
        .then((newStudent) => {
            res.status(201).json({newStudent})
        })
        .catch(next)
})



module.exports = router