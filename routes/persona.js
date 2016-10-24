var persona = require('./model/personaModel');

module.exports ={
    configure: function(app){
        app.get('/Persona',function(req,res){
            persona.list(res);
        });

        app.get('/Persona/:id', function (req, res) {
            persona.get(req.params.id, res);
        });
        
        app.post('/Persona', function (req, res) {
            var validar = validarGuardado(req.body);
            if(validar === ''){
                persona.create(req.body, res);
            }else{
                res.send({ status: 1, message: validar});
            } 
        });

        app.put('/Persona',function(req,res){
            var validar = validarGuardado(req.body);
            if(validar === ''){
                persona.update(req.body, res);
            }else{
                res.send({ status: 1, message: validar});
            } 
        });
   

        app.delete('/Persona/:id', function (req, res) {
            persona.delete(req.params.id, res);
        });

    }
};



function validarGuardado(bodyData){
    var error = '';
    if(bodyData.nombre === '')
    {
        error += 'Ingresar el nombre de la persona<br/>';
    }
    if(bodyData.apellido === '')
    {
        error += 'Ingresar el apellido de la persona <br/>';
    }
    if(bodyData.documento === '')
    {
        error += 'Ingresar el documento de la persona <br/>';
    }
    if(bodyData.tipo_documento === '')
    {
        error += 'Ingresar el tipo de documento de la persona <br/>';
    }

    if(bodyData.usuario === '')
    {
        error += 'Ingresar el usuario de la persona <br/>';
    }
    if(bodyData.clave === ''){
        error += 'Ingresar la clave de la persona';
    }
    
    if(bodyData.id_rol === ''){
        error += 'Ingresar el id rol de la persona';
    }

    return error;
}