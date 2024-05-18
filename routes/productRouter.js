const express = require('express');
const router = express.Router();
const productControl = require('../controllers/productController');

//router.use(express.json());
 // el metodo route nos permite definir una ruta que puede ser accesada con http
 router.route('/productos').get(function(req,res) {
    res.render('form');
}).post(productControl.create);
//ruta para la vista form   
//router.get('/productos/new',productController.new)
router.route('/home').get(function(req,res) {
  res.render('index');
});
////

module.exports = router;