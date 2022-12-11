const { DataTypes } = require('sequelize');
const {dbConnection } = require('../../database');
const {Usuario} = require('../usuario');

const Postagem = dbConnection.define('Postagem', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey:true,
        autoIncrement:true,
        allowNull: false, 
        unique: false
    },
    autor:{
        type: DataTypes.INTEGER, 
        allowNull: false
    },
    title: { 
        type: DataTypes.STRING,
        allowNull: false
    },  
    body:{
        type:DataTypes.TEXT
    }
});

try {
     Postagem.belongsTo(Usuario,{foreignKey:'autor',targetKey:'id'})
} catch (error) {
    console.log("Erro ao criar relacionamento",error);
}
module.exports= Postagem;