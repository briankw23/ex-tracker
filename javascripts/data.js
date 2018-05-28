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
