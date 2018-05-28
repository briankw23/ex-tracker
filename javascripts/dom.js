const stringBuilderExs = (ex) => {
  let domString = '';
  for (let i = 0; i < ex.length; i++) {
    domString += `<div class="row">`;
    domString += `<div class="col-md-12">`;
    domString += `<div class="thumbnail">`;
    domString += `<img src="${ex[i].image}" alt="...">`;
    domString += `<div class="caption">`;
    domString += `<h2>${ex[i].name}</h2>`;
    domString += `<p>${ex[i].flaws}</p>`;
    domString += `<p>${ex[i].age}</p>`;
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
    domString += `<div class="col-md-4">`;
    domString += `<div class="thumbnail">`;
    domString += `<img class="img-responsive center-block" src="${locations[i].image}" alt="...">`;
    domString += `<div class="caption">`;
    domString += `<h3>${locations[i].name}</h3>`;
    domString += `<p>${locations[i].address}</p>`;
    domString += `<p>${locations[i].time}</p>`;
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
