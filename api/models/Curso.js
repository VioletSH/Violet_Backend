/**
 * Curso.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: { 
      type: 'string', 
      required: true, 
      isNotEmptyString: true,
    },
    abreviatura: { 
      type: 'string', 
    },
    // Relación uno a muchos con grupo
    grupos: {
      collection: 'grupo',
      via: 'curso',
    },
    // Relación uno a muchos con modulo
    modulos: {
      collection: 'modulo',
      via: 'curso',
    },
    // Relación uno a muchos con modulo
    caminosApdrendizaje: {
      collection: 'caminoaprendizaje',
      via: 'curso',
    },
  },

};

