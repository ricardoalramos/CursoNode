module.exports = function(app){
    app.get('/formulario_inclusao_noticia', function(req,res){        
        res.render("admin/form_add_noticia", {validacao:{}, noticia: {}});
    });

    app.post('/noticias/salvar', function(req,res){
        var noticia = req.body; 
        
        //Validaçoes
        req.assert("titulo", "Título obrigatorio").notEmpty();
        req.assert("resumo", "Resumo é obrigatorio").notEmpty();
        req.assert("resumo", "Resumo deve conter entre 10 a 100 caracteres").len(10,100);
        req.assert("autor", "Autor é obrigatorio").notEmpty();
        req.assert("data_noticia", "Data é obrigatorio").notEmpty().isDate({format: 'YYYY-MM-DD'});
        req.assert('noticia','Noticia é obrigatória' ).notEmpty();

        var erros = req.validationErrors();
        if (erros){
            res.render("admin/form_add_noticia", {validacao: erros, noticia : noticia});
            return;
        }
        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);
        noticiasModel.SalvarNoticias(noticia, function(error, result){                     
            res.redirect('/noticias');
        } )
    });    
}