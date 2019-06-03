/**
 * Grupo.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    numero: { 
      type: 'number', 
      required: true,
    },
    // relación muchos a uno con curso
    curso: {
      model: 'curso',
      required: true,
    },
    // relación muchos a uno con docente
    docente: {
      model: 'docente',
    },
    // Relación muchos a muchos con estudiante
    estudiantes: {
      collection: 'estudiante',
      via: 'grupos',
    },
  },

};

