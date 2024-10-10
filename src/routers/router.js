const  { Router } = require('express');
const userRoutes = require('./usuarioRota');

const router = Router();


router.use('/user', userRoutes);






module.exports = router;