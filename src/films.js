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
    if (item.director === director && item.score !== '') {
      iterations++;
      totalScore += item.score;
    }

    return totalScore;
  }, 0);

  average = Number((result / iterations).toFixed(2));
  console.log('EXERCICE 3 ->', average);
  return average;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let titlesOnly = array.map((movie) => movie.title);
  let sortedList = titlesOnly.sort();
  let topTwentyMovies = sortedList.slice(0, 20);

  console.log('EXERCICE 4 ->', topTwentyMovies);
  return topTwentyMovies;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let sortByYear = [...array].sort((a, b) => a.year - b.year);
  let sortAlphabetically = sortByYear.sort((a, b) => {
    if (a.year === b.year) {
      if (a.title < b.title) {
        return -1;
      } else if (b.title > a.title) {
        return 1;
      } else {
        return 0;
      }
    }
  });

  console.log('EXERCICE 5 ->', sortAlphabetically);
  return sortAlphabetically;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  const byGenre = array.filter((movie) => {
    if (movie.genre.includes(category)) {
      return movie;
    }
  });

  console.log('EXERCICE 6 ->', moviesAverageOfDirector(byGenre));
  return moviesAverageOfDirector(byGenre);
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const result = [];
  for (let movie of array) {
    result.push(movie);
  }

  const conversion = result.map((movie) => {
    movie.duration = convertingDuration(movie.duration);
    return movie;
  });

  console.log('EXERCICE 7 -> BASE ARRAY IS: ', array);
  console.log('EXERCICE 7 -> RESULT IS: ', result);
  return conversion;
}

function convertingDuration(duration) {
  let indexOfH = duration.indexOf('h');
  let toNumber;
  let hoursToMinutes;
  let indexOfMin = duration.indexOf('min');
  let minutesToNumber;
  let indexOfSpace = duration.indexOf(' ');
  let total = 0;

  if (indexOfH > 0 && indexOfMin < 0) {
    toNumber = Number(duration.slice(0, indexOfH));
    hoursToMinutes = toNumber * 60;
    total += hoursToMinutes;
  } else if (indexOfH > 0 && indexOfSpace > 0) {
    toNumber = Number(duration.slice(0, indexOfH));
    hoursToMinutes = toNumber * 60;

    minutesToNumber = Number(duration.slice(indexOfSpace, indexOfMin));
    total = hoursToMinutes + minutesToNumber;
  } else {
    minutesToNumber = Number(duration.slice(indexOfSpace, indexOfMin));
    total += minutesToNumber;
  }

  return total;
}

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
