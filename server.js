const express = require('express');
const app = express();

app.set('view engine','ejs')
app.use('/public',express.static('public'));
app.get('/',function(req,res){    //ahora le indicamos al servidor web que debe responder con la vista a la petición creada 
    res.render('index');   //El metodo render nos permite enviar la vista despues de configurado el motor
});
app.listen(3000);
