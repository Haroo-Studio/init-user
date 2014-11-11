function UserInit(host, port, user, pass) {
  var port = port || 5984;
  var url = 'http://'+ user +':'+ pass +'@'+ host +':'+ port;

  this.conn = require('nano')(url);
  this.nano = this.conn.db;
  this.db;
}

UserInit.prototype = {
  _replicate: function(source, dest, cb) {
    this.nano.replicate(source, dest, cb);
  },

  use: function(db) {
    this.db = this.conn.use(db);
  },

  _createDB: function(db, cb) {
    this.nano.create(db, cb);
  },

  createNewAccount: function(db, cb) {
    this._createDB(db, function(err, body) {
      this._replicate('haroonote$_account_new', db, cb);
    }.bind(this));
  }
};

module.exports = UserInit;