const Postagem = require('../../model/postagens');
const Usuario = require('../../model/usuario');
module.exports ={
    async create(req, res, next) {
        const { autor, title, body}= req.body;
        if (autor == undefined) {
        res.status(406).json({ message: "Autor não preenchido." })
        }
        else if (title == undefined || title == '') {
            res.status(406).json({ message: "Titulo não preenchido." })
        }
        else{
            Usuario.findByID(autor).then(usuario=>{
                if(usuario !=undefined){
                    Postagem.create({
                        autor:autor,
                        title:title,
                        body:body
                    }).then(post => {
                            if (post!= undefined) { 
                                res.status(200).json({ message: "Postagem adicionada com sucesso", post})
                            }
                            else{
                                next();
                            }
                    }).catch(err=>{
                        next(err);
                    }
                    );
                }else{
                    res.status(404).json({message:"Usuário não encontrado"});
                }
            }).catch(err =>{
                next(err);
            })
          
                
        }
    }
        
}
