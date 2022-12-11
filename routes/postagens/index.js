const { Router }= require('express');
const postagemController=require('../../controller/postagem');

const routes = Router();

routes.post('/postagem/create',postagemController.create);


module.exports = routes;