function createNewHarooID(email, nameToken, prefix) {
  var createUUIDv5 = require('uuidv5');

  var namespace = createUUIDv5('null', nameToken, true);
  var uuid = createUUIDv5(namespace, email);

  return prefix + uuid.replace(/-/g,'');
}

module.exports = createNewHarooID;