const loadLocations = require('./locations');
const loadEx = require('./ex');
const domString = require('./domEx');
const domStringLocation = require('./domLocations');

const successLocations = (data) => {
  console.log('locations', data.locations);
  $('#locations').append(domStringLocation(data.locations));
};

const failLocations = () => {
  console.log('error');
};

const successEx = (data) => {
  console.log('ex', data.ex);
  $('#ex').append(domString(data.ex[0]));
};

const failEx = () => {
  console.log('ex error');
};

const initializer = () => {
  loadEx(successEx,failEx);
  loadLocations(successLocations,failLocations);
};

module.exports = initializer;
