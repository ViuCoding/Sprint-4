// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  // With array.map we iterate through the array and we return only the director's name. This process automatically fills the new "result" array.

  const result = array.map((movie) => movie.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  // We need to get an array of movies of a certain director (passed as a parameter)
  // With array.filter we execute a callback function on each item of the array and if the result is true the item goes in the newly "filtered" array.
  // We simply loop through the array and if the parameter "director" matches one or more items "director" : "value" the item goes into the new array.

  const result = array.filter((movie) => movie.director === director);

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
  const totalResult = array.reduce((totalScore, movie) => {
    if (movie.director === director && movie.score !== '') {
      iterations++;
      totalScore += movie.score;
    }

    return totalScore;
  }, 0); // <<-- This "0" here is the starting value of the parameter/variable "totalScore" a.k.a. the accumulator.

  // We then divide the value of totalResult by the number of iterations/movies to get the average score.
  // We need to convert it with Number() because the .toFixed() method transforms the value into a string.
  average = Number((totalResult / iterations).toFixed(2));
  console.log('EXERCICE 3 AVERAGE IS ->', average);
  return average;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  // First we create an array that only contains the movies titles.
  // We then sort the array alphabetically and, using slice, we only include the first 20 movies.

  const topTwentyMovies = array
    .map((movie) => movie.title)
    .sort()
    .slice(0, 20);

  console.log('EXERCICE 4 ->', topTwentyMovies);
  return topTwentyMovies;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  // Using the spread operator (...array) we clone the array and apply .sort()
  // a and b are basically couples of array elements that get compared with each other each iteration. So if a - b results in a negative number it means that a is a smaller number compared to b hence it will go first in the array. If there happens to be movies from the same year they then get sorted alphabetically using the same principle of comparing a.title and b.title

  const sortByYear = [...array].sort((a, b) => a.year - b.year);
  const sortAlphabetically = sortByYear.sort((a, b) => {
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
  // Using filter we create a copy of the movies array that only contains the movies of a given category/genre (passed as a parameter)
  // If movie.genre (which is an array itself) includes the genre passed as a parameter we include the movie in the new array.
  // We then call the function "moviesAverageOfDirector(array, director)" with the newly created array of movies grouped by genre

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
  // Clone the original array with map
  const moviesLibrary = array.map((movie) => movie);

  // With array.map we create a different array and we update the duration with the converted value.
  // To convert the string duration into a numerical value we call the function convertingDuration(duration) where we pass the duration as a string and we return a number.
  const durationUpdated = moviesLibrary.map((movie) => {
    return { ...movie, duration: convertingDuration(movie.duration) };
  });

  console.log('EXERCICE 7 -> converted array IS: ', durationUpdated);
  return durationUpdated;
}

function convertingDuration(duration) {
  const splitDuration = duration.split(' ');
  let total = 0;
  let hoursToMinutes = parseInt(splitDuration[0]) * 60;
  let minutesOnly;

if(splitDuration.length > 1){
  minutesOnly = parseInt(splitDuration[1]);
  total += hoursToMinutes + minutesOnly;
}else{
  total += hoursToMinutes;
}
  return total;

  // let indexOfH = duration.indexOf('h');
  // let toNumber;
  // let hoursToMinutes;
  // let indexOfMin = duration.indexOf('min');
  // let minutesToNumber;
  // let indexOfSpace = duration.indexOf(' ');
  // let total = 0;

  // if (indexOfH > 0 && indexOfMin < 0) {
  //   toNumber = Number(duration.slice(0, indexOfH));
  //   hoursToMinutes = toNumber * 60;
  //   total += hoursToMinutes;
  // } else if (indexOfH > 0 && indexOfSpace > 0) {
  //   toNumber = Number(duration.slice(0, indexOfH));
  //   hoursToMinutes = toNumber * 60;

  //   minutesToNumber = Number(duration.slice(indexOfSpace, indexOfMin));
  //   total = hoursToMinutes + minutesToNumber;
  // } else {
  //   minutesToNumber = Number(duration.slice(indexOfSpace, indexOfMin));
  //   total += minutesToNumber;
  // }

  // return total;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  // We first create an array of movies of the same year with array.filter.
  const moviesOfTheSameYear = array.filter((movie) => movie.year === year);
  // We then sort the movies by score in descending order.
  const sortedByScore = moviesOfTheSameYear.sort((a, b) => b.score - a.score);
  // We then create and return a different array that only contains the first element of sortedByScore (the movie with the highest score sorted earlier)
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
