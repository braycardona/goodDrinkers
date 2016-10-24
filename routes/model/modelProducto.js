var connection = require('../../mysql/connection');

function Producto()
{
}

(function() {
    this.list = function(res) {
        connection.acquire(function(err, con) {
            con.query('SELECT id_producto, marca, referencia, nombre, descripcion,venta, imagen FROM producto', function(err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    this.get = function(id, res) {
        connection.acquire(function(err, con) {
            con.query('SELECT id_producto, marca, referencia, nombre, descripcion,venta, imagen FROM producto WHERE id_producto = ?', id, function(err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    this.create = function(Producto, res) {
        connection.acquire(function(err, con) {
            con.query('INSERT INTO producto SET ?', [Producto], function(err, result) {
                con.release();
                console.log(Producto);
                if (err) {
                    res.send({status: 1, message: 'Error al crear el producto', error: err});
                } else {
                    res.send({status: 0, message: 'Producto creado satisfactoriamente'});
                }
            });
        });
    };


    this.update = function(Producto, res) {
        connection.acquire(function(err, con) {
            con.query('UPDATE producto SET marca = ?, referencia = ?, nombre= ?, descripcion = ?, venta = ?, imagen =? WHERE id_producto = ?',
                    [Producto.marca, Producto.referencia, Producto.nombre, Producto.descripcion, Producto.venta, Producto.imagen, Producto.id_producto], function(err, result) {
                con.release();
                if (err) {
                    res.send({status: 1, message: 'Error al actualizar el producto', error: err});
                } else {
                    res.send({status: 0, message: 'Producto actualizado satisfactoriamente'});
                }
            });
        });
    };

    this.delete = function(id, res) {
        connection.acquire(function(err, con)
        {

            con.query('SELECT COUNT (*) as total FROM catalogo WHERE id_producto = ?', [id], function(err, result)
            {
                if (result > 0)
                {
                    res.send({status: 1, message: 'Error al eliminar el producto por la relación con catalogo', error: err});

                }

                else
                {

                    con.query('DELETE FROM producto WHERE id_producto = ?', [id], function(err, result) {
                        con.release();
                        if (err) {
                            res.send({status: 1, message: 'Error al eliminar el producto', error: err});
                        } else {
                            res.send({status: 0, message: 'Eliminado éxitosamente'});
                        }
                    });


                }



            });




        });
    };


}).call(Producto.prototype);

module.exports = new Producto();