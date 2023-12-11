const express = require('express');
const router = express.Router();
const usuarioController = require("../../controllers/usuarioController");

router
    .get('/', usuarioController.getAllUsuarios)
    .get("/:usuarioId", usuarioController.getOneUsuario)
    .get("/:usuarioId", usuarioController.getViviendas)
    .get("/:usuarioId", usuarioController.getviviendasFiltradas)
    .post("/:usuarioId", usuarioController.createNewUsuario)
    .patch("/:usuarioId", usuarioController.updateNombreUsuario)
    .put("/:usuarioId", usuarioController.updateTodoUsuario)
    .patch("/:usuarioId", usuarioController.updateViviendaUsuario)
    .delete("/:usuarioId", usuarioController.deleteUsuario);

    module.exports = router;
    