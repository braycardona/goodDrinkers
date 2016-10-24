var Catalogo = require('./model/modelCatalogo');

module.exports ={
    configure: function(app){
        app.get('/Catalogo',function(req,res){
            Catalogo.list(res);
        });

        app.get('/Catalogo/:id', function (req, res) {
            Catalogo.get(req.params.id, res);
        });
        
        app.post('/Catalogo', function (req, res) {
            var validar = validarGuardado(req.body);
            if(validar === ''){
                Catalogo.create(req.body, res);
            }else{
                res.send({ status: 1, message: validar});
            } 
        });

        app.put('/Catalogo',function(req,res){
            var validar = validarGuardado(req.body);
            if(validar === ''){
                Catalogo.update(req.body, res);
            }else{
                res.send({ status: 1, message: validar});
            } 
        });

        app.delete('/Catalogo/:id', function (req, res) {
            Catalogo.delete(req.params.id, res);
        });

    }
};


function validarGuardado(bodyData){
    var error = '';
    if(bodyData.nombre === '')
    {
        error += 'Ingresar el nombre del catalogo <br/>';
    }
    if(bodyData.descripcion === ''){
        error += 'Ingresar la descripcion del catalogo';
    }

    return error;
}