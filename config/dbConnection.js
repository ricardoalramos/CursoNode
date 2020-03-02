var mysql = require('mysql');
var connMySQL = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'ricardo',
        password: 'rf261212',
        database: 'portal_noticias'
    });

}
module.exports = function() {
    return connMySQL;    
}
        