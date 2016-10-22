var express = require('express');
var bodyParser = require ('body-parser');
var app = express();
var connection = require('./mysql/connection');

//Objetos
var tipo_documento = require('./routes/tipo_documento');
var marca = require('./routes/marca');
var persona = require('./routes/persona');
var rol = require('./routes/rol');
var producto = require('./routes/producto');
var catalogo = require('./routes/catalogo');
var inventario = require('./routes/inventario');
var pedido = require('./routes/pedido');
var catalogoVista = require('./routes/catalogoVista');

//Falta
/*
estado Pedido
Detalle pedido
Movimientos inventario
catalogo x producto
*/

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

connection.init();

tipo_documento.configure(app);
marca.configure(app);
persona.configure(app);
rol.configure(app);
producto.configure(app);
catalogo.configure(app);
inventario.configure(app);
pedido.configure(app);
catalogoVista.configure(app);


var server= app.listen('3000', function(){
	console.log('Server listening on  port:' + server.address().port);
});
