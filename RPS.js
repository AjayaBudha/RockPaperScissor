const prompt = require("prompt-sync")();
const fs = require("fs");

//default text
console.log("This is a simple game of Rock Paper scissor.");
console.log("You will be playing this with a computer");
console.log("You will need to choose the correct number for an action");
console.log("1: Rock");
console.log("2: Paper");
console.log("3: Scissor");
console.log("4: History");

let userInput = prompt("Please choose a number: ");
userInput = parseInt(userInput);

console.log(`You chose ${userInput}`);

let userRPS = "";
let botRPS = "";

const getRandomAction = function () {
  return Math.floor(Math.random() * 3) + 1;
};

const botsAction = getRandomAction();

//get the action picked
const getActionName = function (actionNumber) {
  parseInt(actionNumber);
  switch (actionNumber) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissor";
    case 4:
      return "showing history";
  }
};

//get result who won
const battle = function (userRPS, botRPS) {
  // both actions are same
  if (userRPS === botRPS) {
    return "draw";
  }
  //conditions where the bot wins
  if (
    (userRPS === "Rock" && botRPS === "Paper") ||
    (userRPS === "Scissor" && botRPS === "Rock")
  ) {
    return "Bot wins! Unluckly!";
  }
  // condtions where the user wins
  if (
    (userRPS === "Paper" && botRPS === "Rock") ||
    (userRPS === "Rock" && botRPS === "Scissor")
  ) {
    return "User wins! Congratulations!";
  }
};

//action picked for both users
userRPS = getActionName(userInput);
botRPS = getActionName(botsAction);

//display result
console.log();
console.log(`You have chosen ${userRPS}`);
console.log(`Bot have chosen ${botRPS}`);
console.log();
console.log(battle(userRPS, botRPS));
