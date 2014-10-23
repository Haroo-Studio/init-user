var Init = require('../');

var haroo = new Init('localhost', '5984', 'rhiokim', '1'); //host, port, account, password

haroo.createNewAccount('dbname-1234', function(err, body) {
  console.log('create account', err, body);
});