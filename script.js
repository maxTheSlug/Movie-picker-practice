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

//Main code
function start() {
  //Asks for and stores the user's name in the userName variable
  userName = prompt("Welcome to the movie selector program, what is your name?");
  //Checks if the user has entered something.
  CheckUserName();
  //Asks for and stores the user's age in the userName variable
  userAge = prompt("Welcome to the movie selector program " + userName + ", how old are you?");
  //Checks if the user has entered a valid age.
  CheckUserAge();
  alert("Welcome to the movie selector program " + userName + ", you are " + userAge + " years old.")
  alert("As this is a rainy Sunday afternoon, you might like to watch a scary movie. \nHere is a list of available scary movies. \n" + MOVIENAME[0] + " \n" + MOVIENAME[4] + " \n" + MOVIENAME[2] + " \n" + MOVIENAME[1] + " \n" + MOVIENAME[3] + " \n" + MOVIENAME[5]);
  
}

//Functions
function CheckUserName() {
  while (userName == null || userName == "" || userName == " " || !isNaN(userName)) {
    userName = prompt("Welcome to the movie selector program, what is your name?");
  }
}
//Checks if the user has entered something.
function CheckUserAge() {
  while (userAge < MINAGE || userAge > MAXAGE || isNaN(userAge)) {
    userAge = prompt("Sorry " + userName + ", '" + userAge + "' is not a valid age. Please enter an age that is between 5 and 100. \nIf you are younger than 5, or older than 100, then maybe you shouldn’t be watching a scary movie.");
  }
}
//Checks if the user has entered a valid age.