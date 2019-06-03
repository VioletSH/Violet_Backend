/**
 * Contenido.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    
    tipoRespuesta: {
      type: "string",
      isIn: [
        'text/plain',
        'text/html',
        'text/css',
        'image/gif',
        'image/png', 
        'image/jpeg',
        'image/webp',
        'image/svg+xml',
        'audio/mpeg',
        'audio/webm',
        'audio/ogg',
        'audio/wav',
        'video/webm',
        'video/ogg',
        'model/gltf-binary',
        'model/gltf+json',
        'application/pdf',
        'application/javascript',
        'application/json',
        'application/vnd.google-apps.form',
        'application/vnd.google-apps.document',
        'application/vnd.google-apps.presentation',
        'application/vnd.google-apps.spreadsheet',
      ],
    },
    // (se rompe la relación para tener bajo acoplamiento)
    // relación muchos a muchos con caminoAprendizaje
    /*caminoAprendizaje: {
      model: 'caminoAprendizaje',
      required: true,
    }, */
    // relación muchos a uno con actividad
    // (se rompe la bidireccionalidad para evitar ciclos)
    actividad: {
      model: 'actividad',
      required: true,
    },
    // relación muchos a muchos con recurso - peticion
    // (se rompe la bidireccionalidad para evitar ciclos)
    peticion: {
      model: 'recurso',
      required: true,
    },
    
  },

};

