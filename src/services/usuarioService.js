const Workout = require("../database/Usuarios");

const getAllUsuarios = () => {
    const allUsuarios = Workout.getAllUsuarios();
    return allUsuarios;
};
const getOneUsuario = () => {
    return;
    
};
const getViviendas = () => {
    return;
    
};
const getviviendasFiltradas = () => {
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
    getViviendas,
    getviviendasFiltradas,
    createNewUsuario,
    updateNombreUsuario,
    updateTodoUsuario,
    updateViviendaUsuario,
    deleteUsuario
}