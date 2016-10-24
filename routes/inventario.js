var Inv = require('model/model_inventario');

module.exports ={
    configure: function(app){
        app.get('/Inventario',function(req,res){
            Inv.list(res);
        });

        app.get('/Inventario/:id', function (req, res) {
            Inv.get(req.params.id, res);
        });
        
        app.post('/Inventario', function (req, res) {
            var validar = validarGuardado(req.body);
            if(validar === ''){
                Inv.create(req.body, res);
            }else{
                res.send({ status: 1, message: validar});
            } 
        });

        app.put('/Inventario',function(req,res){
            var validar = validarGuardado(req.body);
            if(validar === ''){
                Inv.update(req.body, res);
            }else{
                res.send({ status: 1, message: validar});
            } 
        });

        app.delete('/Inventario/:id', function (req, res) {
            Inv.delete(req.params.id, res);
        });

    }
};

function validarGuardado(bodyData){
    var error = '';
    if(bodyData.id_producto === ''){
        error += 'Ingresar el producto <br/>';
    }else{
        //validar la existencia de producto, si alguno de ustedes puede avanzar
        var result = Inv.vadidarProd(bodyData.id_producto);
        console.log(Inv.vadidarProd(bodyData.id_producto));
    }
    if(bodyData.disponible === ''){
        error += 'Ingresar la cantidad disponible';
    }

    return error;
}




