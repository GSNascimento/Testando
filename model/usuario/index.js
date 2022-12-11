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