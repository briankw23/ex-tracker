let exs = {};

const stringBuilderExs = (ex) => {
  exs = ex;
  let domString = '';
  for (let i = 0; i < ex.length; i++) {
    domString += `<div class="row" >`;
    domString += `<div class="col-md-4">`;
    domString += `<div class="thumbnail">`;
    domString += `<img class="img-responsive img-rounded gf" id="${ex[i].id}" src="${ex[i].image}" alt="...">`;
    domString += `<div class="caption">`;
    domString += `<h2 class="text-center">${ex[i].name}</h2>`;
    domString += `<p class="text-center">Flaws: ${ex[i].flaws}</p>`;
    domString += `<p class="text-center">Age: ${ex[i].age}</p>`;
    domString += `</div>`;
    domString += `</div>`;
    domString += `</div>`;
  }
  return domString;
};

const stringBuilderLocations = (locations) => {
  let domString = '';
  for (let i = 0; i < locations.length; i++) {
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
  };
  return domString;
};

module.exports = {
  stringBuilderExs,
  stringBuilderLocations,
};
