const mongoose = require('mongoose');

// A Mongoose ‘schema’ is a document data structure (or shape of the document) that is enforced via the application layer.

// blogSchema defines the structue of data passed & required property enforces it. 
// timestamps property auto-asigns timestamps whenever the documents inside the collection is updated.

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

// Model
// A Mongoose model is a wrapper on the Mongoose schema. A Mongoose schema defines the structure of the document, default values, validators, etc., whereas a Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.
// first argument of model() should be singular of the actual collection name.
// if the collection exits it saves the docs there otherwise it will create it.

const Blog = mongoose.model('blog', blogSchema);

// Exporting the model
module.exports = Blog;