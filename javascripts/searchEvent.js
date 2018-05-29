const data = require('./data');

let locations = {};
let exs = {};

const searchBar = () => {
  locations = data.getLocations();
  exs = data.getExs();
  $('#search').keypress((e) => {
    console.log(e);
    const input = $('#search').val();
    console.log(locations);
    console.log(exs);
    searchResults(input);
  });
};

const searchResults = (input) => {
  let domString = '';
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].name.includes(input)) {
      console.log(locations[i].name);
    }
  };
  // return domString;
};

module.exports = searchBar;
