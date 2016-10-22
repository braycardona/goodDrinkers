var connection = require('../mysql/connection');

function Catalogo()
{
}

(function () {
    this.list = function (res) {
        connection.acquire(function (err, con) {
            con.query('SELECT id_catalogo, nombre, descripcion FROM catalogo', function (err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    this.get = function (id, res) {
        connection.acquire(function (err, con) {
            con.query('SELECT id_catalogo, nombre, descripcion FROM catalogo WHERE id_catalogo = ?', id, function (err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    this.create = function (Catalogo, res) {
        connection.acquire(function (err, con) {
        	con.query('INSERT INTO catalogo VALUES ?', [Catalogo], function (err, result) {
                con.release();
                console.log(Catalogo);
                if (err) {
                    res.send({ status: 1, message: 'Error al crear el catalogo', error: err });
                } else {
                    res.send({ status: 0, message: 'Catalogo creado satisfactoriamente' });
                }
            });
        });
    };


    this.update = function (Catalogo, res) {
        connection.acquire(function (err, con) {
        	con.query('UPDATE catalogo SET nombre= ?, descripcion = ? WHERE id_catalogo = ?', [Catalogo.nombre, Catalogo.descripcion,Catalogo.id_marca], function (err, result) {
                con.release();
                if (err) {
                    res.send({ status: 1, message: 'Error al actualizar el catalogo', error: err });
                } else {
                    res.send({ status: 0, message: 'Catalogo actualizado satisfactoriamente' });
                }
            });
        });
    };

    this.delete = function (id, res) {
        connection.acquire(function (err, con) {
            con.query('DELETE FROM catalogo WHERE id_catalogo = ?', [id], function (err, result) {
                con.release();
                if (err) {
                    res.send({ status: 1, message: 'Error al eliminar el catalogo', error: err });
                } else {
                    res.send({ status: 0, message: 'Eliminado éxitosamente' });
                }
            });
        });
    };

    
}).call(Catalogo.prototype);

module.exports = new Catalogo();