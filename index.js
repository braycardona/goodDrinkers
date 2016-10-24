var express = require('express');
var bodyparser = require ('body-parser');
var session = require('express-session');
var passport = require('passport');
var connection = require('./mysql/connection');
var oauthRoutes = require('./oauth2/routes');
var clientRoutes = require('./client/routes');
var userRoutes = require('./user/routes');
var app = express();

var tipo_documento = require('./routes/tipo_documento');
var marca = require('./routes/marca');
var persona = require('./routes/persona');
var rol = require('./routes/rol');
var producto = require('./routes/producto');
var catalogo = require('./routes/catalogo');
var inventario = require('./routes/inventario');
var pedido = require('./routes/pedido');
var catalogoVista = require('./routes/catalogoVista');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
connection.init();
app.use(session({
  secret: 'eV9o7OemlmRJOge',
  saveUninitialized: true,
  resave: true
}));
app.use(passport.initialize());
oauthRoutes.configure(app);
clientRoutes.configure(app);
userRoutes.configure(app);

tipo_documento.configure(app);
marca.configure(app);
persona.configure(app);
rol.configure(app);
producto.configure(app);
catalogo.configure(app);
inventario.configure(app);
pedido.configure(app);
catalogoVista.configure(app);

var server = app.listen(3000, function () {
  console.log('Server listening on port ' + server.address().port);
});
