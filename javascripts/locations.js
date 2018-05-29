const data = require('./data');
const dom = require('./dom');
const search = require('./searchEvent');

const requestLocation = () => {
  return new Promise((resolve, reject) => {
    $.ajax('./db/locations.json')
      .done((data) => {
        resolve(data);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const recieveLocation = () => {
  requestLocation()
    .then((results) => {
      data.setLocations(results.locations);
      $('#locations').html(dom.stringBuilderLocations(results.locations));
      search();
    })
    .catch((error) => {
      console.error('error', error);
    });
};

module.exports = recieveLocation;
