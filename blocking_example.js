function responseReady(response) {
  console.log(response);
}
//async query
db.query('SELECT * FROM articles WHERE id = 1', responseReady);
//async cycle query
for(var i = 1; i < 100; i ++) {
  db.query('SELECT * FROM articles WHERE id = ?', i, responseReady);
}

