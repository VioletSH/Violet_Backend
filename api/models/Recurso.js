/**
 * Recurso.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    url: {
      type: "string",
      required: true,
      isNotEmptyString: true,
      isURL: true,
    },
    tipoContenido: {
      type: "string",
      required: true,
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
    }
  },

};

