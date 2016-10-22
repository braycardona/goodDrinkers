module.exports ={
    configure: function(app){
        app.get('/Pedido/:id',function(req,res){
        res.send('hello world get product '+ req.params.id)
        });

        app.get('/Pedido',function(req,res){
            res.send('hello world get param product');
        });

        app.post('/Pedido',function(req,res){
            var pedido =req.body;
            res.send('hello world post product' + pedido.id + ' ' + pedido.persona + ' ' + pedido.estado + ' ' + pedido.total + ' ' + pedido.fecha + ' ' + pedido.pagado);
        });

        app.put('/Pedido/:id',function(req,res){
            res.send('hello world put product' + pedido);
        });

        app.delete('/Pedido/:id',function(req,res){
            res.send('hello world delete product');
        });
    }
};