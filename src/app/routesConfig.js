"use strict";

const MovieList = require('./components/MovieList');
const Movie = require('./components/Movie');
const NotFound = require('./components/notFound');

const routesConfig = [
  {path: '/', component: MovieList},
  {path: '/movie/:id', component: Movie},
  {path: '*', component: NotFound}
];

module.exports = routesConfig;