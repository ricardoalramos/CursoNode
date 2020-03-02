function NoticiasDAO(connection){
    this._connection = connection;
}
NoticiasDAO.prototype.getNoticia = function(callback, id){
    this._connection.query('select * from noticias where id_noticias = ' + id, callback);
}
NoticiasDAO.prototype.getNoticias = function(callback){
    
    this._connection.query('select * from noticias', callback);
}
NoticiasDAO.prototype.SalvarNoticias = function(noticia, callback){
    this._connection.query('insert into noticias set ?', noticia, callback);

}

module.exports = function(){    
    return NoticiasDAO;
}