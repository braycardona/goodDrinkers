var connection = require('../../mysql/connection');

function Persona()
{
}

(function() {
    this.list = function(res) {
        connection.acquire(function(err, con) {
            con.query('SELECT id_persona, nombre, apellido, documento, tipo_documento,usuario, clave, id_rol FROM persona', function(err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    this.get = function(id, res) {
        connection.acquire(function(err, con) {
            con.query('SELECT id_persona, nombre, apellido, documento, tipo_documento,usuario, clave, id_rol FROM persona WHERE id_persona = ?', id, function(err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    this.create = function(persona, res) {
        connection.acquire(function(err, con) {

            con.query('SELECT COUNT(*) as total FROM persona WHERE documento = ?', [persona.documento], function(err, result)
            {


                if (result[0].total > 0)
                {
                    res.send({status: 1, message: 'Elige otro documento, este ya está en uso'});

                }

                else
                {

                    con.query('INSERT INTO persona SET ?', [persona], function(err, result) {
                con.release();
                console.log(persona);
                if (err) {
                    res.send({status: 1, message: 'Error al crear la persona', error: err});
                } else {
                    res.send({status: 0, message: 'Persona creada satisfactoriamente'});
                }
            });


                }



            });




        });
    };


    this.update = function(persona, res) {
        connection.acquire(function(err, con) {
            con.query('UPDATE persona SET nombre = ?, apellido = ?, documento= ?, tipo_documento = ?, usuario = ?, clave =?, id_rol WHERE id_persona = ?',
                    [persona.nombre, persona.apellido, persona.documento,persona.tipo_documento, persona.usuario, persona.clave, persona.id_rol, persona.id_persona], function(err, result) {
                con.release();
                if (err) {
                    res.send({status: 1, message: 'Error al actualizar la persona', error: err});
                } else {
                    res.send({status: 0, message: 'Persona actualizada satisfactoriamente'});
                }
            });
        });
    };

    this.delete = function(id, res) {
        connection.acquire(function (err, con) {
            con.query('DELETE FROM persona WHERE id_persona = ?', [id], function (err, result) {
                con.release();
                if (err) {
                    res.send({ status: 1, message: 'Error al eliminar la persona', error: err });
                } else {
                    res.send({ status: 0, message: 'Persona eliminada éxitosamente' });
                }
            });
        });
    };


}).call(Persona.prototype);

module.exports = new Persona();