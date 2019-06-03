/**
 * Respuesta.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    porcentajeAvance: {
      type: 'number',
      defaultsTo: 0,
    },

    calificacion: {
      type: 'number',
      defaultsTo: 0,
    },

    contenido: {
      model: 'contenido',
      required: true,
    },

    respuesta: {
      model: 'recurso',
    },

    caminoEstudiante: {
      model: 'caminoEstudiante',
      required: true,
    },
  },

};

