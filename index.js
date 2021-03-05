const { Console } = require("console");
const { exit } = require("process");
const readline = require("readline");
const r1 = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    r1.question(questionText, resolve);
  });
}

start();
// the async function covering the whole project from here on
async function start() {
  let response = await ask(
    'It’s a dark damp night and you are on the road out in front of 182 Main St. and you swear you heard a soft whisper.\n\n" Would you like to play a game?\n\nYou think maybe that was just a thought in your head.\n \nYou need to decide\n\n then voice returns\n'
  );
  // our first use of the async coverage
  let answer = await ask(
    '"Have you decided?\n\nONLY respond with a\n \nYes or a No"\n\n'
  );
  process.stdin.once("data", (answer) => {
    let response = answer.toString().toLowerCase.trim();
  });

  if ((response = y)) {
    //This is where we got stuck, not too far into the game.
    console.log(
      "you may proceed the the entrance door of City Hall\n there you will find a note, follow its instructions perfectly"
    );
  } else {
    console.log(
      "I am sorry you do not want to play/n you can always change your mind, I will be here"
    );
    process.exit;
  }

  console.log(
    'you find the note sitting on a numerical key pad.\nThe note is simple, "You will have 3 chances to put this code in correctly\n Code 1234'
  );

  let doorcode = await ask(1234);

  let count = 0;
  //gives the player 3 try's to get the code correct
  if (doorCode === 1234) {
    console.log("enter");
  } else {
    while (count < 4) {
      count = count + 1;
    }
    console.log(
      "You've had three tries/n You are not serious, go home to mother dear."
    ),
      process.exit;
  }
}


