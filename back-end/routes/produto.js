var express = require('express');
var router = express.Router();
var controller = require('../controllers/produto')(/* construtor */);

router.get('/', controller.listar);
router.get('/:id', controller.obterUm);

module.exports = router;
