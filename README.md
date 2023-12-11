Ejercicio de programacion

En este codigo se intenta emular una API REST de acceso a una base de datos con usuarios y viviendas.
Las acciones que se pueden realizar vienen dadas por el enrutador ("usuarioRoutes.js") y son las siguientes:

    .get('/', usuarioController.getAllUsuarios)
    Obtiene todos los usuarios
    .get("/:usuarioId", usuarioController.getOneUsuario)
    Obtiene un unico usuario, necesita identificador del mismo
    .get("/:usuarioId", usuarioController.getViviendas)
    Obtiene todas las viviendas de un usuario, necesita identificador
    .get("/:usuarioId", usuarioController.getviviendasFiltradas)
    Obtiene todas las viviendas de un usuario aplicando filtros, necesita identificador y filtros opcionales
    .post("/:usuarioId", usuarioController.createNewUsuario)
    Crea un nuevo Usuario
    .patch("/:usuarioId", usuarioController.updateNombreUsuario)
    Actualiza el nombre de un usuario
    .put("/:usuarioId", usuarioController.updateTodoUsuario)
    Actualiza todos los campos de un usuario
    .patch("/:usuarioId", usuarioController.updateViviendaUsuario)
    Actualiza las viviendas de un usario
    .delete("/:usuarioId", usuarioController.deleteUsuario);
    Elimina a un usuario, debe dar error si tiene viviendas asociadas (no implementado)

El codigo esta dispuesto en cuatro capas para facilitar su modularidad y mantenimiento: Aplicacion, Enrutador, Servicios y Controlador.

    
