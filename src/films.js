// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((director) => director.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((item) => {
    if (item.director === director) {
      return item.title;
    }
  });

  console.log('EXERCICE 2 ->', result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let iterations = 0;
  let average;

  let result = array.reduce((totalScore, item) => {
    if (item.director === director) {
      totalScore += item.score;
      iterations++;
    }

    return totalScore;
  }, 0);

  average = result / iterations;
  console.log('EXERCICE 3 ->', average);
  return average;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {}

// Exercise 5: Order by year, ascending
function orderByYear() {}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
