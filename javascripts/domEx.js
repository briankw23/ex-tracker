const domString = (ex) => {
  let domString = '';
  domString += `<div class="row">`;
  domString += `<div class="col-md-12">`;
  domString += `<div class="thumbnail">`;
  domString += `<img src="${ex.image}" alt="...">`;
  domString += `<div class="caption">`;
  domString += `<h2>${ex.name}</h2>`;
  domString += `<p>${ex.flaws}</p>`;
  domString += `<p>${ex.age}</p>`;
  domString += `</div>`;
  domString += `</div>`;
  domString += `</div>`;
  return domString;
};

module.exports = domString;
