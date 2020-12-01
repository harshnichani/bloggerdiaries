const express = require('express');
const controller = require('../controller/controller');

const router = express.Router();

// Using find() method on Blog model to display all blogs on the index view

// *** GET REQUEST ***

router.get('/', controller.blog_index);

// *** DELETE REQUEST ***

router.delete('/:id', controller.blog_delete);

module.exports = router;