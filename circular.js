/*jshint esversion: 6*/

module.exports = (source, find) => {
  do {
    source += source;
  } while (source.length < find.length * 2);

  return source.toLowerCase().indexOf(find.toLowerCase()) > -1;
};
