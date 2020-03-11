module.exports = function(app){ 
    app.get('/', function(req,res){
        //res.send("<html><body>Portal de Notícias<body></html>");
       app.app.controllers.home.index(app, req, res);
    });
}