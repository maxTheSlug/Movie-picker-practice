/********** Movie Picker Program **********/

//Constants, arrays and variables here
//The array storing the movie scare levels
const MOVIESCARE = [10, 7, 5, 4, 3, 1];
//The array storing the movie names, in order
const MOVIENAME = ["The Witches", "Jaws", "Ghostbusters", "Monster House", "Goosebumps", "Monster Inc"];
//The lowest scare limit for the user
const LOWSCARE = 1;
//The highest scare limit for the user
const HIGHSCARE = 10;
//The lowest user age
const MINAGE = 5;
//The highest user age
const MAXAGE = 100;
//String variable that saves the user's name
var userName;
//Number variable that saves the user's age
var userAge;
//Number variable that saves the user's scare limit
var userScareLimit;
//Boolean variable that is used in error mesaage while loops; while invalidValue = true, etc
//var invalidValue = true;
