const mongoose = require('mongoose');
const Joi = require('joi');

const newSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    tags: [String]
});

//create model for Schema, determine which collection to store it in
const schemaModel = mongoose.model('webapp-lite', newSchema);


function validateGenre(genre) {
    const schema = {
      name: Joi.string().min(3).required(),
      author: Joi.string()
    };
  
    return Joi.validate(genre, schema);
  }

exports.schemaModel = schemaModel;
exports.validateGenre = validateGenre;