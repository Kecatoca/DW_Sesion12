
const db = require('../models/index');  //importamos la carpeta de los modelos 
//import db from '../models/index';

//const Producto = require('../models/productModel') 
const Producto = db.productos;
//Crear producto

module.exports = {
    create: async function(req,res) {
     
      try {
      
        const {nombre, descripcion, precio } = req.body;
        await Producto.create({nombre, descripcion, precio });
         
          res.send('Registro guardado exitosamente');
        //res.send(`User created successfully! ID: ${Producto.id}`);
      } 
      catch (error) {
        //if (transaction) await transaction.rollback();
        console.error(error);
        res.status(500).send('Error creating user');
      }  
     
      
  }
    };
    

   
   


 