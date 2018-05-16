const domStringLocation = (locations) => {
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

module.exports = domStringLocation;
