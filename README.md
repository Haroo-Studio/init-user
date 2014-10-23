init-user
=========

create new account function 

### how to npm

```bash
$ npm install git://github.com/haroo-studio/init-user.git
```

### usage

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