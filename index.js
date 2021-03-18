const {
  Console
} = require("console");
const {
  exit
} = require("process");
const readline = require("readline");
const r1 = readline.createInterface(process.stdin, process.stdout);

// Global Variables
let count = 0;

// Function Setting Up `ask()`
function ask(questionText) {
  return new Promise((resolve, reject) => {
    r1.question(questionText, resolve);
  });
}

// Calling the Start function to start the game initially.
start();

// The Start function itself handles the intro description and can call functions for other locations such as `SourHall` .
async function start() {
  // Take in users first response.
  let response = await ask(
    'It’s a dark damp night and you are on the road out in front of 182 Main St. and you swear you heard a soft whisper.\n\n"Would you like to play a game?\n\nYou think maybe that was just a thought in your head.\n \nYou need to decide\n\nThe voice returns\n\nHave you decided?\n\nONLY respond with a Yes or a No"\n\n>_'
  );
  // Check if the response is yes.
  if (response == 'yes') {
    //If yes, then console log this text so the game proceeds, Call the sourHall function once done.
    console.log(
      "You may proceed the the entrance door of City Hall\nThere you will find a note, follow its instructions perfectly"
    );
    console.log(
      'You find the note sitting on a numerical key pad.\nThe note is simple, "You will have 3 chances to put this code in correctly\n Code 1234'
    );
    sourHall()
  } else {
    // If no, console log and end the program with process.exit()
    console.log(
      "I am sorry you do not want to play\n you can always change your mind, I will be here"
    );
    process.exit();
  }
}

// Handles the sourHall room "logic". For instance the door code, and in the future any other rooms
//  past this room can be called like a function just like sourHall().
async function sourHall() {

  let doorCode = await ask('What is the code?');

  //Gives the player 3 try's to get the code correct.
  if (doorCode == 1234) {
    console.log("enter");
  } else {
    // Each time the user guesses wrong, the game adds 1 to `score`, and if score reaches 4, then exits
    // the game.
    if (count < 3) {
      count++;
      console.log(`You have guessed wrong ${count} / 4 times`)
      // Each time the user guesses wrong we re-call sourHall() so that the user is not left hanging,
      //  count has been set as a global variable so that it does not reset to zero each time this
      //  is called.
      sourHall()
    } else {
      console.log(
          "You've had three tries/n You are not serious, go home to mother dear."
        ),
        process.exit();
    }
  }
}