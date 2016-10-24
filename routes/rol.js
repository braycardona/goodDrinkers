var rol = require('./model/modelRol');

module.exports ={
    configure: function(app){
        app.get('/rol',function(req,res){
            rol.list(res);
        });

        app.get('/rol/:id', function (req, res) {
            rol.get(req.params.id, res);
        });
        
        app.post('/rol', function (req, res) {
            var validar = validarGuardado(req.body);
            if(validar === ''){
                rol.create(req.body, res);
            }else{
                res.send({ status: 1, message: validar});
            } 
        });

        app.put('/rol',function(req,res){
            var validar = validarGuardado(req.body);
            if(validar === ''){
                rol.update(req.body, res);
            }else{
                res.send({ status: 1, message: validar});
            } 
        });
   

        app.delete('/rol/:id', function (req, res) {
            rol.delete(req.params.id, res);
        });

    }
};



function validarGuardado(bodyData){
    var error = '';
    if(bodyData.nombre_rol === '')
    {
        error += 'Ingresar el nombre del rol<br/>';
    }
    if(bodyData.codigo_rol === ''){
        error += 'Ingresar el código del rol';
    }

    return error;
}