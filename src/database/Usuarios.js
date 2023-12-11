const DB = require('./db.json')

const getAllUsuarios = () => {
    return DB.usuarios;
}

module.exports = { getAllUsuarios };