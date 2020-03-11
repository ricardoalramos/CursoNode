module.exports.noticias = function(app, req, res){
    var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticias(function(error, result){
            
            res.render("noticias/noticias", {noticias: result});
        } )

}

module.exports.noticia = function(app, req, res){

    var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticia(function(error, result){         
            res.render("noticias/noticia", {noticia: result});
        }, 1 )
        
        // connection.query('select * from noticias where id_noticias = 2', function(error, result){         
        //     res.render("noticias/noticia", {noticia: result});
        // });

}