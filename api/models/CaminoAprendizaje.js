/**
 * CaminoAprendizaje.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: { 
      type: 'string', 
      required: true 
    },
    // Relación muchos a uno con curso
    curso: {
      model: 'curso',
      required: true,
    },
    // (cambiar por un arreglo ordenado o un JSON que 
    //permita cosas como caminos en paralelo u opcionales)
    // Relación uno a muchos con contenido
    /*contenidos: {
      collection: 'contenido',
      via: 'caminoAprendizaje',
    },*/
    contenidos: {
      type: 'json',
    },
  },

};

