var Init = require('../').initUserDB;

var haroo = new Init('localhost', '8080', 'a', '1'); //host, port, account, password

haroo.createNewAccount('test-for-init-module-1234', function(err, body) {
  console.log('create account', err, body);
});