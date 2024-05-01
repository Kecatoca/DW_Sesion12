const dbConfig = require('../config/dbConfig');
const {Sequelize, DataTypes} = require('sequelize');
//Parámetros de Conexión a la BD
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASS, {
        host:dbConfig.HOST,
        dialect:dbConfig.dialect,
        operatorAliases:false,
    }

)
//Conexión y autenticación
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.productos = require('../models/productModel')(sequelize, DataTypes)
db.sequelize.sync({force:false})
 
module.exports = db