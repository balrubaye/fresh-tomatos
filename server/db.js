const level = require('level');
const sublevel = require('level-sublevel');

module.exports = sublevel( level('fresh-tomatos-db', {valueEncoding: 'json'}) );