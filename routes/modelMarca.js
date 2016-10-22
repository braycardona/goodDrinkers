var connection = require('../mysql/connection');

function Marca()
{
}

(function() {
    this.list = function(res) {
        connection.acquire(function(err, con) {
            con.query('SELECT id_marca, nombre, descripcion FROM marca', function(err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    this.get = function(id, res) {
        connection.acquire(function(err, con) {
            con.query('SELECT id_marca, nombre, descripcion FROM marca WHERE id_marca = ?', id, function(err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    this.create = function(marca, res) {
        connection.acquire(function(err, con) {
            con.query('INSERT INTO marca SET ?', [marca], function(err, result) {
                con.release();
                console.log(marca);
                if (err) {
                    res.send({status: 1, message: 'Error al crear la marca', error: err});
                } else {
                    res.send({status: 0, message: 'Marca creada satisfactoriamente'});
                }
            });
        });
    };


    this.update = function(marca, res) {
        connection.acquire(function(err, con) {
            con.query('UPDATE marca SET nombre= ?, descripcion = ? WHERE id_marca = ?', [marca.nombre, marca.descripcion, marca.id_marca], function(err, result) {
                con.release();
                if (err) {
                    res.send({status: 1, message: 'Error al actualizar la marca', error: err});
                } else {
                    res.send({status: 0, message: 'Marca actualizada satisfactoriamente'});
                }
            });
        });
    };

    this.delete = function(id, res) {
        connection.acquire(function(err, con)
        {

            con.query('SELECT COUNT(*) as total FROM producto WHERE id_marca = ?', [id], function(err, result)
            {


                if (result[0].total > 0)
                {
                    res.send({status: 1, message: 'Error al eliminar la marca por la relación con productos'});

                }

                else
                {

                    con.query('DELETE FROM marca WHERE id_marca = ?', [id], function(err, result) {
                        con.release();
                        if (err) {
                            res.send({status: 1, message: 'Error al eliminar la marca', error: err});
                        } else {
                            res.send({status: 0, message: 'Marca eliminado satisfactoriamente'});
                        }
                    });


                }



            });




        });
    };


}).call(Marca.prototype);

module.exports = new Marca();