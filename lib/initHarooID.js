function createNewHarooID(email) {
  var createUUIDv5 = require('uuidv5');

  var nameToken = 'db1.haroopress.com';
  var namespace = createUUIDv5('null', nameToken, true);
  var uuid = createUUIDv5(namespace, email);

  return 'b' + uuid.replace(/-/g,'');
}

module.exports = createNewHarooID;