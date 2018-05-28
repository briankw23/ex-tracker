let exs = {};

let locations = {};

const getLocations = () => {
  return locations;
};

const setLocations = (lolo) => {
  locations = lolo;
};

const getExs = () => {
  return exs;
};

const setExs = (exGirls) => {
  exs = exGirls;
};

module.exports = {
  setExs,
  setLocations,
  exs,
  locations,
  getExs,
  getLocations,
};

// const loadLocations = require('./locations');
// const loadEx = require('./ex');
// const domString = require('./domEx');
// const domStringLocation = require('./domLocations');
// const searchBar = require('./searchEvent');
// const successLocations = (data) => {
//   console.log('locations', data.locations);
//   $('#locations').append(domStringLocation(data.locations));
//   locations = data.locations;
//   searchBar(locations);
// };

// const failLocations = () => {
//   console.log('error');
// };

// const successEx = (data) => {
//   console.log('ex', data.ex);
//   $('#ex').append(domString(data.ex[0]));
//   searchBar(locations);
// };

// const failEx = () => {
//   console.log('ex error');
// };

// const initializer = () => {
//   loadEx(successEx,failEx);
//   loadLocations(successLocations,failLocations);

// };

// module.exports = {
//   initializer,
//   getLocations,
// };
