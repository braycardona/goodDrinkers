var Marca = require('./model/modelMarca');

module.exports ={
    configure: function(app){
        app.get('/Marca',function(req,res){
            Marca.list(res);
        });

        app.get('/Marca/:id', function (req, res) {
            Marca.get(req.params.id, res);
        });
        
        app.post('/Marca', function (req, res) {
            var validar = validarGuardado(req.body);
            if(validar === ''){
                Marca.create(req.body, res);
            }else{
                res.send({ status: 1, message: validar});
            } 
        });

        app.put('/Marca',function(req,res){
            var validar = validarGuardado(req.body);
            if(validar === ''){
                Marca.update(req.body, res);
            }else{
                res.send({ status: 1, message: validar});
            } 
        });
   

        app.delete('/Marca/:id', function (req, res) {
            Marca.delete(req.params.id, res);
        });

    }
};



function validarGuardado(bodyData){
    var error = '';
    if(bodyData.nombre === '')
    {
        error += 'Ingresar el nombre de la marca <br/>';
    }
    if(bodyData.descripcion === ''){
        error += 'Ingresar la descripcion de la marca';
    }

    return error;
}