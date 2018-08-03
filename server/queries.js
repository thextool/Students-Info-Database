const db = require('./Database/db-connections')

module.exports = {
    getAll() {
        return db('student')
    },
    getById(id) {
        return db('student')
        .where('id', id)
    },
    getByLastName(lastName) {
        return db('student')
        .where('last_name', lastName)
        .select('*')
    }
}