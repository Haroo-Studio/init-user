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
var Init = require('init-user').initUserDB;
var couchdb = new Init('localhost', '5984', 'admin', 'pass1234');

couchdb.createNewAccount('dbname', function(err, res) {
  if (err) {
    throw new Error('fail');
  }

  console.log(res);
});
```

#### init haroo id

```js
var Init = require('init-user').initHarooID;

var haroo_id = Init('soomtong@gmail.com');

console.log(haroo_id);
```

