const { DataTypes } = require('sequelize');
const {dbConnection } = require('../../database');

const Usuario = dbConnection.define("Usuario",
    {
        id: {
            type:DataTypes.INTEGER,
            autoIncremente:true,
            primaryKey:true

        },
        nome:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        senha:{
            type:DataTypes.STRING,
            allowNull:false
        },
        cpf:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
        cep:{
            type:DataTypes.INTEGER
        },
        cidade:{
            type:DataTypes.STRING
        },
        estado:{
            type:DataTypes.STRING
        },
        telefone:{
            type:DataTypes.STRING,
            allowNull:false
        },
        nascimento:{
            type:DataTypes.STRING,
            allowNull:false
        }

    },{
        timestamps:false
    });

    module.exports = {
        Usuario,
        async findByID(id){
            return Usuario.findOne({
                where:{
                    id:id
                }
            });
        }
    };