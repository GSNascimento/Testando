const usuario = require('./Usuarios');


module.exports={
    setRoutes(app){
        app.use(usuario);
    }
}