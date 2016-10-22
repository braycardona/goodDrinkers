var CatalogoVista = require('./modelCatalogo_producto');

module.exports ={
    configure: function(app){
        app.get('/CatalogoVista',function(req,res){
            CatalogoVista.list(res);
        });

        app.get('/CatalogoVista/:id', function (req, res) {
            CatalogoVista.get(req.params.id, res);
        });
        
        app.post('/CatalogoVista', function (req, res) {
            CatalogoVista.create(req.body, res);
            console.log(req.body.id_catalogo);
        });

        app.put('/CatalogoVista',function(req,res){
            CatalogoVista.update(req.body, res);
        });

        app.delete('/CatalogoVista/:id', function (req, res) {
            CatalogoVista.delete(req.params.id, res);
        });

    }
};