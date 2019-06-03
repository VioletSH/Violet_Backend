/**
 * CaminoEstudiante.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    estudiante: {
      model: 'estudiante',
      required: true,
    },

    caminoAprendizaje: {
      model: 'caminoAprendizaje',
      required: true,
    },

    respuestas: {
      collection: 'respuesta',
      via: 'caminoEstudiante',
    },

  },

};

