var connection = require('../../mysql/connection');

function rol()
{
}

(function() {
    this.list = function(res) {
        connection.acquire(function(err, con) {
            con.query('SELECT id_rol, nombre, codigo FROM rol', function(err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    this.get = function(id, res) {
        connection.acquire(function(err, con) {
            con.query('SELECT id_rol, nombre, codigo FROM rol WHERE id_rol = ?', id, function(err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    this.create = function(rol, res) {
        connection.acquire(function(err, con) {
            con.query('INSERT INTO rol SET ?', [rol], function(err, result) {
                con.release();
                console.log(rol);
                if (err) {
                    res.send({status: 1, message: 'Error al crear el rol', error: err});
                } else {
                    res.send({status: 0, message: 'Rol creado satisfactoriamente'});
                }
            });
        });
    };


    this.update = function(rol, res) {
        connection.acquire(function(err, con) {
            con.query('UPDATE rol SET nombre_rol= ?, codigo_rol = ? WHERE id_rol = ?', [rol.nombre, rol.codigo_rol, rol.id_rol], function(err, result) {
                con.release();
                if (err) {
                    res.send({status: 1, message: 'Error al actualizar el rol', error: err});
                } else {
                    res.send({status: 0, message: 'Rol actualizado satisfactoriamente'});
                }
            });
        });
    };

    this.delete = function (id, res) {
        connection.acquire(function (err, con) {

            con.query('SELECT COUNT(*) as total FROM persona WHERE id_rol = ?', [id], function(err, result)
            {


                if (result[0].total > 0)
                {
                    res.send({status: 1, message: 'Error al eliminar el rol por relación con persona'});

                }

                else
                {

                    con.query('DELETE FROM persona WHERE id_rol = ?', [id], function(err, result) {
                        con.release();
                        if (err) {
                            res.send({status: 1, message: 'Error al eliminar el rol', error: err});
                        } else {
                            res.send({status: 0, message: 'Rol eliminado satisfactoriamente'});
                        }
                    });


                }



            });




        });
    };


}).call(rol.prototype);

module.exports = new rol();






