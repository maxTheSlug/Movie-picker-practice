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
//Boolean variable that is used in error message while loops; while invalidValue = true, etc.
var confirmMovie = true;


//Main code
function start() {
  //Asks for and stores the user's name in the userName variable
  userName = prompt("Welcome to the movie selector program, what is your name?");
  //Checks if the user has entered something.
  CheckUserName();
  //Asks for and stores the user's age in the userName variable
  userAge = prompt("Welcome to the movie selector program " + userName + ", how old are you?");
  //Checks if the user has entered a valid age, a number between 5 and 100.
  CheckUserAge();
  //Lists the avalible movies in the order shown on the task sheet, 0,4,2,1,3,5
  alert("Welcome to the movie selector program " + userName + ", you are " + userAge + " years old.");
  SuggestUserMovie();
  
}
  
//Functions

//Checks if the user has entered something.
function CheckUserName() {
  while (userName == null || userName == "" || userName == " " || !isNaN(userName)) {
    userName = prompt("Welcome to the movie selector program, what is your name?");
  }
}
//Checks if the user has entered a valid age.
function CheckUserAge() {
  while (userAge < MINAGE || userAge > MAXAGE || isNaN(userAge)) {
    userAge = prompt("Sorry " + userName + ", '" + userAge + "' is not a valid age. Please enter an age that is between 5 and 100. \nIf you are younger than 5, or older than 100, then maybe you shouldn’t be watching a scary movie.");
  }
}
//Checks if the user has entered a valid scare limit, a number between 1 and 10.
function CheckUserScareLimit() {
  while (userScareLimit < LOWSCARE || userScareLimit > HIGHSCARE || isNaN(userScareLimit)) {
  userScareLimit = prompt("Sorry, '" + userScareLimit + "' is not a valid scare limit. Please enter a scare limit that is between " + LOWSCARE + " and " + HIGHSCARE + ". ");
  }
}
function SuggestUserMovie() {
  alert("As this is a rainy Sunday afternoon, you might like to watch a scary movie. \nHere is a list of available scary movies. \n" + MOVIENAME[0] + " \n" + MOVIENAME[4] + " \n" + MOVIENAME[2] + " \n" + MOVIENAME[1] + " \n" + MOVIENAME[3] + " \n" + MOVIENAME[5]);
  //Asks for and store's the user's prefered scare level in the userScareLimit variable
  userScareLimit = prompt("From " + LOWSCARE + " to " + HIGHSCARE + ", what is the highest level of scariness you would like for your movie?");
  //Checks if the user has entered a valid scare limit, a number between 1 and 10.
  CheckUserScareLimit();
  //array something
  for (i = 0; i < MOVIENAME.length; i++) {
    if (userScareLimit >= MOVIESCARE[i]) {
      alert("Hi " + userName + ", age " + userAge + ", based on your preferred level of scariness, we think that " + MOVIENAME[i] + " is the best movie choice for you.");
    break;
    }
  }
  confirmMovie = confirm("Please confirm that the movie you would like to watch is " + MOVIENAME[i] + ". This movie has a scariness level of " + MOVIESCARE[i] + ". This is within your prefered scariness level, but if you would like to change your mind, press Cancel. If you would like to break and watch " + MOVIENAME[i] + ", press Ok.");
  switch (true) {
    case (confirmMovie == true):
      alert("Starting " + MOVIENAME[i] + ".");
      break;
    case (confirmMovie == false):
      SuggestUserMovie();
  }
}