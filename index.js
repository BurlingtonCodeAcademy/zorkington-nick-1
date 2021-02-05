const { Console } = require("console");
const readline = require("readline");
const { start } = require("repl");
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}
console.log(
  `It’s a dark damp night and you swear you heard a soft whisper\n You think maybe that was just in your head?. \nYou need to decide\n Should I really continue.`);

start();

async function start, (return(Promise.resolve)
  const storyLine = ask("so do you want to play?") )
}

start.then({  (storyLine === "yes" || "y") 
if (storyline === true) {console.log(
  "Very Good/n There's just a just have a couple of things we have to discuss"
)}

else {console.log("sorry to take up any of  your time\n Goodbye")}
  })
  let answer = await ask();
  let userName = await ask("What is your name? ");

  console.log(`Hello', ${userName}, 'let us get started.`);
  //else {console.log ('Sorry to take up any of your time./n enjoy this gorgeous night',(process.exit)}
}
//class Room {

//constructor(description, inventory, left, right, straight, back);

//  this.description = description;
//  this.inventory = inventory;
//  this.left = left;
//  this.right = right;
//  this.straight = straight;
//  this.back = back;

//}
//describe(){
//return
//}
//let myRoom = new Room("")

//console.log(myRoom.describe())

//let orderArr = process.argv.slice(2);

//orderArr.forEach((items) => {
// orderTotal += menu[items];
//});

//while(answer !== 'exit') {
//answer = await ask('>_ ')
//}
//let sign = {
//description: "The code to enter is 12345.\nEnter at your own risk. "
//read: () => {
//return this.description
//}
//}
