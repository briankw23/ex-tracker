const data = require('./data');

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
      data.getExs(results.ex);
    })
    .catch((error) => {
      console.error('error', error);
    });
};

module.exports = recieveEX;

// const loadEx = (successFunction, errorFunction) => {
//   $.get('../db/ex.json')
//     .done(successFunction)
//     .fail(errorFunction);
// };

// module.exports = loadEx;
