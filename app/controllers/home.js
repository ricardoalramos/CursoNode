module.exports.index = function(app, req, res){
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.getUltimasNoticias(function(error, result){        
        if (!error){
            res.render("home/index", {noticias: result});
        }
        else{
            console.log(error);
        }
        
    });
    

}