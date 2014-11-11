var Init = require('../');

var accountInit = new Init('db1.haroopress.com', '80', 'a', '1');
var haroo_id = accountInit.createNewHarooID('soomtong@gmail.com');

console.log(haroo_id);
