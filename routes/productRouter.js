const express = require('express');
let router = express.Router();
let productControl = require('../controllers/productController');
const productController = require('../controllers/productController');

 // el metodo route nos permite definir una ruta que puede ser accesada con http
router.route('/productos').get(function(req,res) {
    res.render('index');
}).post(productControl.create);
//ruta para la vista form   
//router.get('/productos/new',productController.new)

////
router.route('/productos/new').get(function(req,res) {
  res.render('form');
});
module.exports = router;