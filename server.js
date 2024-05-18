const express = require('express');
const app = express();
const Sequelize = require ('sequelize');
const connect = require('./models/index');
const prodRoutes = require('./routes/productRouter');


app.set('view engine','ejs');
app.use('/public',express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(prodRoutes);

//app.get('/',function(req,res){    //ahora le indicamos al servidor web que debe responder con la vista a la petición creada 
//    res.render('index');   //El metodo render nos permite enviar la vista despues de configurado el motor
//});
app.listen(3000);

//Instalamos el ORM Sequelize con:  npm i sequelize
//tambien instalamos el cliente de MySql para node con: npm i --save mysql2  
//Otro componente que añadiremos será CORS ( Cross-Origin Resource Sharing o en español Intercambio de recursos de origen cruzado)
//npm i --save cors
//Agregaremos dos carpetas a la estructura del proyecto routes y config
