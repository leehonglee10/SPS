var genRandInt1to3 = function () {
  //generate random integer from 1 to 3
  var randInt = Math.floor(Math.random() * 3) + 1;
  return randInt;
};

var genComThrow = function () {
  var randInt = genRandInt1to3();
  var comThrow = "";
  //assign each randInt to a throw
  if (randInt == 1) {
    comThrow = "scissors";
  } else if (randInt == 2) {
    comThrow = "paper";
  } else if (randInt == 3) {
    comThrow = "stone";
  }
  return comThrow;
};

//--------------------------------------
//    normal ruleset
//--------------------------------------

//create 3 helper functions, each for one possible user throw
//each helper function takes comThrow, and returns 1 of 3 possible outcomes, win, lose or draw

var userThrowIsScissors = function (comThrow) {
  var winLose = "";
  if (comThrow == "scissors") {
    winLose = "It's a draw.";
  } else if (comThrow == "paper") {
    winLose = "You win!";
  } else if (comThrow == "stone") {
    winLose = "You lose.";
  }
  return winLose;
};

var userThrowIsPaper = function (comThrow) {
  var winLose = "";
  if (comThrow == "scissors") {
    winLose = "You lose.";
  } else if (comThrow == "paper") {
    winLose = "It's a draw.";
  } else if (comThrow == "stone") {
    winLose = "You win!";
  }
  return winLose;
};

var userThrowIsStone = function (comThrow) {
  var winLose = "";
  if (comThrow == "scissors") {
    winLose = "You win!";
  } else if (comThrow == "paper") {
    winLose = "You lose.";
  } else if (comThrow == "stone") {
    winLose = "It's a draw.";
  }
  return winLose;
};

//create SPS game function to run default game logic
//normalSPS calls one of the 3 helpers, depending on what the input is
//also takes comThrow as input, as this will be generated in main

var normalSPS = function (userThrow, comThrow) {
  if (userThrow == "scissors") {
    winLose = userThrowIsScissors(comThrow);
  } else if (userThrow == "paper") {
    winLose = userThrowIsPaper(comThrow);
  } else if (userThrow == "stone") {
    winLose = userThrowIsStone(comThrow);
  }
  return winLose;
};

//--------------------------------------
//    reverse ruleset
//--------------------------------------

//repeat the above
//create 3 helper functions for each userThrow, but reverse outcomes

var userThrowIsReverseScissors = function (comThrow) {
  var winLose = "";
  if (comThrow == "scissors") {
    winLose = "It's a draw.";
  } else if (comThrow == "paper") {
    winLose = "You lose.";
  } else if (comThrow == "stone") {
    winLose = "You win!";
  }
  return winLose;
};

var userThrowIsReversePaper = function (comThrow) {
  var winLose = "";
  if (comThrow == "scissors") {
    winLose = "You win!";
  } else if (comThrow == "paper") {
    winLose = "It's a draw.";
  } else if (comThrow == "stone") {
    winLose = "You lose.";
  }
  return winLose;
};

var userThrowIsReverseStone = function (comThrow) {
  var winLose = "";
  if (comThrow == "scissors") {
    winLose = "You lose.";
  } else if (comThrow == "paper") {
    winLose = "You win!";
  } else if (comThrow == "stone") {
    winLose = "It's a draw.";
  }
  return winLose;
};

//create reverseSPS function to run reverse game logic

var reverseSPS = function (userThrow, comThrow) {
  if (userThrow == "reverse scissors") {
    winLose = userThrowIsReverseScissors(comThrow);
  } else if (userThrow == "reverse paper") {
    winLose = userThrowIsReversePaper(comThrow);
  } else if (userThrow == "reverse stone") {
    winLose = userThrowIsReverseStone(comThrow);
  }
  return winLose;
};

//main

var main = function (input) {
  //input validation
  if (
    input !== "scissors" &&
    input !== "paper" &&
    input !== "stone" &&
    input !== "reverse scissors" &&
    input !== "reverse paper" &&
    input !== "reverse stone"
  ) {
    return "Please input either 'scissors', 'paper', or 'stone'.<br><br>Or, you could try adding 'reverse' in front of any of the above to try your luck...";
  }

  //create conThrow and winLose vars
  var comThrow = genComThrow();
  var winLose = "";

  //run game logic functions based on input
  if (input == "scissors" || input == "paper" || input == "stone") {
    winLose = normalSPS(input, comThrow);
  } else if (
    input == "reverse scissors" ||
    input == "reverse paper" ||
    input == "reverse stone"
  ) {
    winLose = reverseSPS(input, comThrow);
  }
  var myOutputValue =
    "You chose " +
    input +
    ".<br><br>The computer chose " +
    comThrow +
    ".<br><br>" +
    winLose;
  return myOutputValue;
};
