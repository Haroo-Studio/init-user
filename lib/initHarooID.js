function createNewHarooID(email, nameToken) {
  var createUUIDv5 = require('uuidv5');

  var namespace = createUUIDv5('null', nameToken, true);
  var uuid = createUUIDv5(namespace, email);

  return 'b' + uuid.replace(/-/g,'');
}

module.exports = createNewHarooID;