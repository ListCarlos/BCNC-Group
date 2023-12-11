const Workout = require("../database/Usuarios");

const getAllUsuarios = () => {
    const allUsuarios = Workout.getAllUsuarios();
    return allUsuarios;
};
const getOneUsuario = () => {
    return;
};
const createNewUsuario = () => {
    return;
};
const updateNombreUsuario = () => {
    return;
};
const updateTodoUsuario = () => {
    return;
};
const updateViviendaUsuario = () => {
    return;
};
const deleteUsuario = () => {
    return;
};

module.exports = {
    getAllUsuarios,
    getOneUsuario,
    createNewUsuario,
    updateNombreUsuario,
    updateTodoUsuario,
    updateViviendaUsuario,
    deleteUsuario
}