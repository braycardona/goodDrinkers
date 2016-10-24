var connection = require('../../mysql/connection');

function CatalogoVista()
{
}

(function () {
    this.list = function (res) {
        connection.acquire(function (err, con) {
            con.query('SELECT cp.id_catalogo, c.nombre, p.id_producto, p.nombre as "nombre producto", p.descripcion FROM catalogo_x_producto cp LEFT JOIN catalogo c ON cp.id_catalogo = c.id_catalogo LEFT JOIN producto p ON p.id_producto = cp.id_producto', function (err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    this.get = function (id, res) {
        connection.acquire(function (err, con) {
            con.query('SELECT cp.id_catalogo, c.nombre, p.id_producto, p.nombre as "nombre producto", p.descripcion FROM catalogo_x_producto cp LEFT JOIN producto p ON p.id_producto = cp.id_producto LEFT JOIN catalogo c ON cp.id_catalogo = c.id_catalogo WHERE p.id_producto = ?', id, function (err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    this.create = function (CatalogoVista, res) {
        connection.acquire(function (err, con) {
            con.query('INSERT INTO catalogo_x_producto SET ?', [CatalogoVista], function (err, result) {
                con.release();
                console.log(CatalogoVista);
                if (err) {
                    res.send({ status: 1, message: 'Error al asociar el producto en el catalogo', error: err });
                } else {
                    res.send({ status: 0, message: 'Producto asociado correctamente al catalogo' });
                }
            });
        });
    };


    this.update = function (CatalogoVista, res) {
        connection.acquire(function (err, con) {
            con.query('UPDATE catalogo_x_producto SET id_catalogo= ?, id_producto = ? WHERE id_producto = ?', [CatalogoVista.id_catalogo, CatalogoVista.id_producto], function (err, result) {
                con.release();
                if (err) {
                    res.send({ status: 1, message: 'Error al actualizar el registro', error: err });
                } else {
                    res.send({ status: 0, message: 'Registro actualizado satisfactoriamente' });
                }
            });
        });
    };


    this.delete = function(id, res) {
        connection.acquire(function(err, con)
        {

            con.query('SELECT COUNT(*) as total FROM detalle_pedido WHERE id_producto = ?', [id], function(err, result)
            {


                if (result[0].total > 0)
                {
                    res.send({status: 1, message: 'Error al eliminar la marca por la relación con productos'});

                }

                else
                {

                    con.query('DELETE FROM catalogo_x_producto WHERE id_producto = ?', [id], function(err, result) {
                        con.release();
                        if (err) {
                            res.send({status: 1, message: 'Error al eliminar el producto de este catálogo', error: err});
                        } else {
                            res.send({status: 0, message: 'Producto eliminado satisfactoriamente del catálogo'});
                        }
                    });


                }



            });




        });
    };






    
}).call(CatalogoVista.prototype);

module.exports = new CatalogoVista();




