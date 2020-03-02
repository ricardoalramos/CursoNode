module.exports = function(app){ 
    app.get('/', function(req,res){
        //res.send("<html><body>Portal de Notícias<body></html>");
        res.render("home/index");
    });
}