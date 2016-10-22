var connection = require('../mysql/connection');

function tipoDoc()
{
}

(function () {
    this.list = function (res) {
        connection.acquire(function (err, con) {
            con.query('SELECT id_tipo_documento, nombre, descripcion FROM tipo_documento', function (err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    this.get = function (id, res) {
        connection.acquire(function (err, con) {
            con.query('SELECT id_tipo_documento, nombre, descripcion FROM tipo_documento WHERE id_tipo_documento = ?', id, function (err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    this.create = function (tipoDoc, res) {
        connection.acquire(function (err, con) {
        	con.query('INSERT INTO tipo_documento SET ?', [tipoDoc], function (err, result) {
                con.release();
                console.log(tipoDoc);
                if (err) {
                    res.send({ status: 1, message: 'Error el tipo de documento', error: err });
                } else {
                    res.send({ status: 0, message: 'Tipo de documento creado satisfactoriamente' });
                }
            });
        });
    };


    this.update = function (tipoDoc, res) {
        connection.acquire(function (err, con) {
        	con.query('UPDATE tipo_documento SET nombre= ?, descripcion = ? WHERE id_tipo_documento = ?', 
                [tipoDoc.nombre, tipoDoc.descripcion,tipoDoc.id_marca], function (err, result) {
                con.release();
                if (err) {
                    res.send({ status: 1, message: 'Error al actualizar el tipo de documento', error: err });
                } else {
                    res.send({ status: 0, message: 'Tipo de documento actualizado satisfactoriamente' });
                }
            });
        });
    };

    this.delete = function (id, res) {
        connection.acquire(function (err, con) {
            con.query('DELETE FROM tipo_documento WHERE id_tipo_documento = ?', [id], function (err, result) {
                con.release();
                if (err) {
                    res.send({ status: 1, message: 'Error al eliminar el tipo de documento', error: err });
                } else {
                    res.send({ status: 0, message: 'Eliminado éxitosamente' });
                }
            });
        });
    };

    
}).call(tipoDoc.prototype);

module.exports = new tipoDoc();