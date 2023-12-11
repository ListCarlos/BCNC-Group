const usuarioService = require("../services/usuarioService");

const getAllUsuarios = (req, res) => {
    const allUsuarios = usuarioService.getAllUsuarios();
    res.send({ status: 'OK', data: allUsuarios });
};
const getOneUsuario = (req, res) => {
    const Usuario = usuarioService.getOneUsuario(req.params.usuarioId);
    res.send("Get Usuario " + req.params.usuarioId);
};
const getViviendas = (req, res) => {
    const Viviendas = usuarioService.getViviendas(req.params.usuarioId);
    res.send("Get Viviendas " + req.params.usuarioId);
};
const getviviendasFiltradas = (req, res) => {
    const Viviendas = usuarioService.getViviendasFiltradas(req.params.usuarioId && (req.params.ciudad || req.params.calle || req.params.pais));
    res.send("Get Viviendas Filtradas " + req.params.usuarioId && (req.params.ciudad || req.params.calle || req.params.pais));
};
const createNewUsuario = (req, res) => {
    const createdUsuario = usuarioService.createNewUsuario(req.params.usuarioId);
    res.send("Create Usuario " + req.params.usuarioId);
};
const updateNombreUsuario = (req, res) => {
    const updatednameUsuario = usuarioService.updateNombreUsuario(req.params.usuarioId);
    res.send("Update name usuario " + req.params.usuarioId);
};
const updateTodoUsuario = (req, res) => {
    const updatedUsuario = usuarioService.updateTodoUsuario(req.params.usuarioId);
    res.send("Update usuario " + req.params.usuarioId);
};
const updateViviendaUsuario = (req, res) => {
    const updatedVivienda = usuarioService.updateViviendaUsuario(req.params.usuarioId);
    res.send("Update Vivienda " + req.params.usuarioId);
};
const deleteUsuario = (req, res) => {
    workoutService.deleteUsuario(req.params.usuarioId);
    res.send("Delete usuario " + req.params.usuarioId);
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
};