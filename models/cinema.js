const Cinema = function (films) {
  this.films = films;
};
Cinema.prototype.allFilms = function() {
  return this.films;
}
Cinema.prototype.allFilmTitles = function() {
const allTitles = this.films.map((film) => {
    return film.title;
  });
  return allTitles;
}
Cinema.prototype.findFilmByTitle = function(targetFilm) {
const filmByTitle = this.films.filter((film) => {
  return film['title'] === targetFilm;
});
  return filmByTitle;
}
Cinema.prototype.findFilmsByGenre = function(targetFilm) {
const filmsByGenre = this.films.filter((film) => {
  return film['genre'] === targetFilm;
});
  return filmsByGenre;
}
Cinema.prototype.findFilmsByYear = function(targetFilm) {
const filmsByYear = this.films.filter((film) => {
  return film['year'] === targetFilm;
});
  if (filmsByYear.length>0) {
    return true;
  } else {
    return false;
  };
}
Cinema.prototype.allFilmsOverLength = function(length) {
  return this.films.every((film) => {
    return film['length'] >= 90;
  });
}
Cinema.prototype.totalRunningTime = function(length) {
  return this.films.reduce((running_total, film) => {
    return running_total + film['length'];
  }, 0);
}


module.exports = Cinema;
