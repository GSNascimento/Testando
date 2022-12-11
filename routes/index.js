const postagem = require('./postagens');


module.exports={
    setRoutes(app){
        app.use(postagem);
    }
}