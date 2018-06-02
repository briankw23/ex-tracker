const data = require('./data');
// const dom = require('./dom');

let locations = {};
let exs = {};

const searchBar = () => {
  // keyPress Event
  $('#search').keypress((e) => {
    if (e.key === 'Enter') {
      console.log(e);
      const input = e.target.value;
      exs = data.getExs();
      locations = data.getLocations();
      console.log(locations);
      console.log(exs);
      searchResults(input);
    };
  });
};

const back = () => {
  $('#back').click((e) => {
    console.log(e);
    $('#ex').show();
    $('#locations').show();
    $('#filter').html('');
  });
};

const searchResults = (input) => {
  $('#ex').hide();
  $('#locations').hide();
  let domString = '';
  for (let i = 0; i < locations.length; i++) {
    if (input.toLowerCase() === locations[i].name.toLowerCase() || input.toLowerCase() === locations[i].address.toLowerCase()) {
      domString += `<div class="rows">`;
      domString += `<div class="col-md-3">`;
      domString += `<div class="thumbnail">`;
      domString += `<img class="img-responsive locPic" src="${locations[i].image}" alt="...">`;
      domString += `<div class="caption">`;
      domString += `<h3 class="text-center">${locations[i].name}</h3>`;
      domString += `<p class="text-center">${locations[i].address}</p>`;
      domString += `<p class="text-center">${locations[i].time}</p>`;
      for (let j = 0; j < exs.length; j++) {
        if (locations[i].idEx === exs[j].id) {
          domString += `<img class="img-responsive img-circle small center-block" src="${exs[j].image}" alt="...">`;
        }
      };
      domString += `<button id="back" class="btn btn-default" type="button">Back</button>`;
      domString += `</div>`;
      domString += `</div>`;
      domString += `</div>`;
      console.log('yes');
    }
  };
  $('#filter').html(domString);
  back();
};

module.exports = searchBar;
