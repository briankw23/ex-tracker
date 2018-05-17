// const data = require('./data');

let locations = {};

const searchBar = (data) => {
  $('#search').keypress((e) => {
    console.log(e);
    const input = $('#search').val();
    console.log('$', input);
    console.log('event value', e.target.value);
    locations = data;
    console.log(locations);
    searchResults(input);
  });
};

const searchResults = (input) => {
  let domString = '';
  for (let i = 0; i < locations.length; i++) {
    const lolo = locations[i].title;
    const addy = locations[i].address;
    if (lolo.search(input) >= 1) {
      domString += locations[i].title;
    }
    else if (addy.search(input) >= 1) {
      domString += locations[i].address;
    };
  };
  console.log('search match', domString);
  // return domString;
};

module.exports = searchBar;
