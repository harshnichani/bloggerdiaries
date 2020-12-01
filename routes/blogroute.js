const express = require('express');
const controller = require('../controller/controller')
const router = express.Router();

// *** GET REQUEST ***

router.get('/create', controller.blog_create_get);

// *** POST REQUEST ***

router.post('/create', controller.blog_create_post);

module.exports = router;