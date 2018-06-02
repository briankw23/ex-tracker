const data = require('./data');

let locations = {};
let exs = {};

const buttonEvent = () => {
  $('.btn').click((e) => {
    buttonDom(e);
  });
};
const exClick = () => {
  $('.gf').click((e) => {
    exDom(e);
  });
};
const exDom = (e) => {
  locations = data.getLocations();
  exs = data.getExs();
  const button = e.target.id;
  let domString = '';
  for (let j = 0; j < exs.length; j++) {
    if (parseInt(button) === exs[j].id) {
      domString += `<div class="row">`;
      domString += `<div class="col-md-4 gf" id="${exs[j].name}">`;
      domString += `<div class="thumbnail">`;
      domString += `<img class="img-responsive img-rounded" src="${exs[j].image}" alt="...">`;
      domString += `<div class="caption">`;
      domString += `<h2 class="text-center">${exs[j].name}</h2>`;
      domString += `<p class="text-center">Flaws: ${exs[j].flaws}</p>`;
      domString += `<p class="text-center">Age: ${exs[j].age}</p>`;
      domString += `</div>`;
      domString += `</div>`;
      domString += `</div>`;
    }
  }
  for (let i = 0; i < locations.length; i++) {
    if (parseInt(button) === locations[i].idEx) {
      domString += `<div class="rows">`;
      domString += `<div class="col-md-3">`;
      domString += `<div class="thumbnail">`;
      domString += `<img class="img-responsive locPic" src="${locations[i].image}" alt="...">`;
      domString += `<div class="caption">`;
      domString += `<h3 class="text-center">${locations[i].name}</h3>`;
      domString += `<p class="text-center">${locations[i].address}</p>`;
      domString += `<p class="text-center">${locations[i].time}</p>`;
      domString += `</div>`;
      domString += `</div>`;
      domString += `</div>`;
    }
  };
  printToDom(domString);
};

const buttonDom = (e) => {
  locations = data.getLocations();
  exs = data.getExs();
  const button = e.target.id;
  let domString = '';
  for (let i = 0; i < locations.length; i++) {
    if (button === locations[i].time) {
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
      domString += `</div>`;
      domString += `</div>`;
      domString += `</div>`;
    }
  }
  printToDom(domString);
};

const printToDom = (string) => {
  $('#ex').html('');
  $('#locations').html('');
  $('#filter').html(string);
};

module.exports = {
  buttonEvent,
  exClick,
};
