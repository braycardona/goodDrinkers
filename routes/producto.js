var Prod = require('./modelProducto');

module.exports ={
    configure: function(app){
        app.get('/Prod',function(req,res){
            Prod.list(res);
        });

        app.get('/Prod/:id', function (req, res) {
            Prod.get(req.params.id, res);
        });
        
        app.post('/Prod', function (req, res) {
            var validar = validarGuardado(req.body);
            if(validar === ''){
                Prod.create(req.body, res);
            }else{
                res.send({ status: 1, message: validar});
            } 
        });

        app.put('/Prod',function(req,res){
            var validar = validarGuardado(req.body);
            if(validar === ''){
                Prod.update(req.body, res);
            }else{
                res.send({ status: 1, message: validar});
            } 
        });

        app.delete('/Prod/:id', function (req, res) {
            Prod.delete(req.params.id, res);
        });

    }
};


function validarGuardado(bodyData){
    var error = '';
    if(bodyData.id_marca === '')
    {
        error += 'Ingresar el id de la marca <br/>';
    }
    if(bodyData.marca === '')
    {
        error += 'Ingresar el nombre de la marca <br/>';
    }
    if(bodyData.referencia === '')
    {
        error += 'Ingresar la referencia del producto <br/>';
    }
    if(bodyData.nombre === '')
    {
        error += 'Ingresar el nombre del producto <br/>';
    }
    if(bodyData.descripcion === '')
    {
        error += 'Ingresar la descripcion del producto </br>';
    }
    if(bodyData.venta === '')
    {
        error += 'Ingresar la venta <br/>';
    }
    if(bodyData.imagen === '')
    {
        error += 'Ingresar la imagen del producto <br/>';
    }

    return error;
}