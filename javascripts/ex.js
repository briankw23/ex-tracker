const data = require('./data');
const dom = require('./dom');
const button = require('./buttons');
const search = require('./searchEvent');

const requestEx = () => {
  return new Promise((resolve, reject) => {
    $.ajax('./db/ex.json')
      .done((data) => {
        resolve(data);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const recieveEX = () => {
  requestEx()
    .then((results) => {
      data.setExs(results.ex);
      $('#ex').html(dom.stringBuilderExs(results.ex));
      button.exClick();
      search();
    })
    .catch((error) => {
      console.error('error', error);
    });
};

module.exports = recieveEX;
