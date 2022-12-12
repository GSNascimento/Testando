const { Router }= require('express');


const routes = Router();

routes.post('/usuario/cadastrar',(req, res)=>{
    req.body;
    return res.json(req.body);
    const usuario = usuario.create(req.body);
}
);


module.exports = routes;