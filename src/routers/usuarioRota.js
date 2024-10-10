const { Router } = require('express');
const userController = require('../controllers/userController');
const router = Router();

router.post('/', userController.create ); // Função para criar

router.put('/:id', userController.update ); // Função para editar

router.delete('/:id', userController.delete ); // Função para deletar

router.get('/:id', userController.getOne ); // Função para buscar unico

router.get('/', userController.getAll ); // Função para buscar todos

module.exports = router;