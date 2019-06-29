/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
    'GET /CursoGrupo/:idCurso/:idGrupo': 'Custom/get-curso-grupo' ,
    'GET /ConsultaInicialEstudiante/:idEstudiante': 'Custom/consulta-inicial-estudiante'
};
