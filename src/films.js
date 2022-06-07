// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  // With array.map we iterate through the array and we return only the director's name. This process automatically fills the new "result" array.

  let result = array.map((movie) => movie.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  // We need to get an array of movies of a certain director (passed as a parameter)
  // We array.filter we execute a callback function on each item of the array and if the result is true the item goes in the newly "filtered" array.
  // We simply loop through the array and if the parameter "director" matches one or more items "director" : "value" the item goes into the new array.

  let result = array.filter((movie) => movie.director === director);

  console.log('EXERCICE 2 ->', result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  // We will use array.reduce to add up all the scores of the movies of a certain director.
  // We use the "iterations" variable to keep track of how many entries/movies the given director has so we can later use it to calculate the average score.

  let iterations = 0;
  let average;

  // First we reduce the various scores of a certain director (that we receive as a parameter in the moviesAverageOfDirector function) into a single numerical value.
  let totalResult = array.reduce((totalScore, movie) => {
    if (movie.director === director && movie.score !== '') {
      iterations++;
      totalScore += movie.score;
    }

    return totalScore;
  }, 0); // <<-- This "0" here is the starting value of the parameter/variable "totalScore" a.k.a. the accumulator.


// We then divide the value of totalResult by the number of iterations/movies to get the average score.
// We need to convert it with Number() because the .toFixed() method transforms the values into strings.
  average = Number((totalResult / iterations).toFixed(2));
  console.log('EXERCICE 3 AVERAGE IS ->', average);
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
    return { ...movie, duration: convertingDuration(movie.duration) };
  });

  console.log('EXERCICE 7 -> converted array IS: ', conversion);
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
function bestFilmOfYear(array, year) {
  const moviesOfTheSameYear = array.filter((movie) => {
    if (movie.year === year) {
      return movie;
    }
  });

  const sortedByScore = moviesOfTheSameYear.sort((a, b) => b.score - a.score);
  const topScore = sortedByScore.slice(0, 1);

  console.log('EXERCICE 8 -> sortedByScore IS: ', sortedByScore);
  console.log('EXERCICE 8 -> topScore IS: ', topScore);

  return topScore;
}

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
