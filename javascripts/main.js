const button = require('./buttons');
const recieveLocation = require('./locations');
const recieveEx = require('./ex');
const search = require('./searchEvent');

button.buttonEvent();
recieveEx();
recieveLocation();
search();
