const data = require('./data');
const dom = require('./dom');
const button = require('./buttons');

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
      console.log('EXs', results.ex);
      data.setExs(results.ex);
      $('#ex').html(dom.stringBuilderExs(results.ex));
      button.exClick();
    })
    .catch((error) => {
      console.error('error', error);
    });
};

module.exports = recieveEX;
