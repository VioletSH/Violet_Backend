/**
 * Estudiante.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: 'string', 
      required: true,
    },
    correoElectronico: { 
      type: 'string', 
      required: true, 
      unique: true, 
      isEmail: true,
      regex: /^[a-zA-Z0-9._%+-]+@uao.edu.co$/g,
    },
    // Relación muchos a muchos con grupo
    grupos: {
      collection: 'grupo',
      via: 'estudiantes',
    },

    // Relación muchos a uno con CaminoEstudiante
    caminosEstudiante: {
      collection: 'caminoEstudiante',
      via: 'estudiante',
    },
  },

};

