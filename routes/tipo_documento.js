var TipoDoc = require('./modelTipoDoc');

module.exports ={
    configure: function(app){
        app.get('/TipoDoc',function(req,res){
            TipoDoc.list(res);
        });

        app.get('/TipoDoc/:id', function (req, res) {
            TipoDoc.get(req.params.id, res);
        });
        
        app.post('/TipoDoc', function (req, res) {
            var validar = validarGuardado(req.body);
            if(validar === ''){
                TipoDoc.create(req.body, res);
            }else{
                res.send({ status: 1, message: validar});
            } 
        });

        app.put('/TipoDoc',function(req,res){
            var validar = validarGuardado(req.body);
            if(validar === ''){
                TipoDoc.update(req.body, res);
            }else{
                res.send({ status: 1, message: validar});
            } 
        });

        app.delete('/TipoDoc/:id', function (req, res) {
            TipoDoc.delete(req.params.id, res);
        });

    }
};

function validarGuardado(bodyData){
    var error = '';
    if(bodyData.nombre === ''){
        error += 'Ingresar el nombre del documento <br/>';
    }
    if(bodyData.descripcion === ''){
        error += 'Ingresar la descripcion del documento';
    }

    return error;
}
