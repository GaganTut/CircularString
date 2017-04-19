/*jshint esversion: 6*/

module.exports = (source, find) => {
  source += source;
  return source.toLowerCase().indexOf(find.toLowerCase()) > -1;
};