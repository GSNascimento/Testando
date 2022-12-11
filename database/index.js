const Sequelize = require('sequelize');

const dbConnection = new Sequelize({ 
	database:"recode", 
	username:"postgres",
	password:"psql",
	host:"localhost",
	dialect:"postgres"
});

 function connect(){
	 dbConnection.authenticate().then(
		console.log("Conexão com banco de dados realizada com sucesso!")
		).catch(err=>{
		console.log("Erro ao conectar no banco!",err);
	})
	
	
}
//Sincroniza as tabelas
dbConnection.sync().then(
console.log("Tabelas criadas com sucesso")
).catch(err =>{console.log("Erro ao criar tabelas.", err)});
module.exports = {dbConnection, connect};