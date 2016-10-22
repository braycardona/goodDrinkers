var connection = require('../mysql/connection');

function model_inventario(){}

(function() {
    this.list = function(res) {
        connection.acquire(function(err, con) {
            con.query('SELECT id_inventario, id_producto, disponible,compromiso FROM inventario', function(err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    this.get = function(id, res) {
        connection.acquire(function(err, con) {
            con.query('SELECT id_producto, disponible,compromiso FROM inventario WHERE id_inventario=?', id, function(err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    this.vadidarProd = function(id, res) {
        connection.acquire(function(err, con) {
            con.query('SELECT id_producto as prod FROM producto WHERE id_producto=?', id, function(err, result) {
                con.release();
                console.log(result[0]);
                return result[0];
            });
        });
    };

    this.create = function(inventario, res) {
        connection.acquire(function(err, con) {
            con.query('INSERT INTO inventario SET ?', [inventario], function(err, result) {
                con.release();
                if (err) {
                    res.send({status: 1, message: 'Error al crear el inventario', error: err});
                } else {
                    res.send({status: 0, message: 'Inventario creado satisfactoriamente'});
                }
            });
        });
    };


    this.update = function(inventario, res) {
        connection.acquire(function(err, con) {
            con.query('UPDATE inventario SET disponible= ?, compromiso = ? WHERE id_inventario = ?', [inventario.disponible, inventario.compromiso, inventario.id_inventario], function(err, result) {
                con.release();
                if (err) {
                    res.send({status: 1, message: 'Error al actualizar el inventario', error: err});
                } else {
                    res.send({status: 0, message: 'Inventario actualizado satisfactoriamente'});
                }
            });
        });
    };

    this.delete = function(id, res) {
        connection.acquire(function(err, con){
            con.query('SELECT id_producto as producto FROM inventario WHERE id_inventario = ?', [id], function(err, result){
                if (result[0].producto !== null){
                    con.query('SELECT COUNT(*) as total FROM producto WHERE id_producto = ?', [result[0].producto], function(err, result){
                        if (result[0].total > 0){
                            res.send({status: 1, message: 'Error al eliminar el inventario por la relación con productos'});
                        }else{
                            con.query('DELETE FROM inventario WHERE id_inventario = ?', [id], function(err, result) {
                                con.release();
                                if (err) {
                                    res.send({status: 1, message: 'Error al eliminar el inventario', error: err});
                                } else {
                                    res.send({status: 0, message: 'Inventario eliminado satisfactoriamente'});
                                }
                            });
                        }
                    });
                }else{
                   res.send({status: 1, message: 'El inventario seleccionado no existe'}); 
                }
            });
        });
    };

}).call(model_inventario.prototype);

module.exports = new model_inventario();

