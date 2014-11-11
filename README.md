init-user
=========

create new account function 

### how to npm

```bash
$ npm install git://github.com/haroo-studio/init-user.git
```

### usage

#### init database

```js
var CouchServerConnector = require('init-user');
var couchdb = new CouchServerConnector('localhost', '5984', 'admin', 'pass1234');

couchdb.createNewAccount('dbname', function(err, res) {
  if (err) {
    throw new Error('fail');
  }

  console.log(res);
});
```

#### init haroo id

```js
var CouchServerConnector = require('init-user');
var database = require('../config/database');

var InitUser = new CouchServerConnector(database.couch.host, database.couch.port, database.couch.id, database.couch.pass);

exports.initHarooID = function (email) {
    return InitUser.createNewAccount(email);
};
```

