// const data = require('./data');

const searchBar = (dataFunction) => {
  $('#search').keypress((e) => {
    console.log(e);
    const input = $('#search').val();
    console.log('$', input);
    console.log('event value', e.target.value);
  });
};

module.exports = searchBar;
