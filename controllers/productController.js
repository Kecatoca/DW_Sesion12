const db = require('../models')  //importamos la carpeta de los modelos 

const Productos = db.productos

//Crear producto

module.exports = {
    create: function(req,res) {
        Productos.create({
          nombre: req.body.nombre,
          descripcion: req.body.descripcion,
          precio: req.body.precio          
        }).then(result=>{
          res.json(result);
        }).catch(err=>{
          console.log(err);
          res.json(err);
        })
    },
    new: function(req,res) {
      res.render('form');
    } 
    
  };


 