const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

start();

async function start() {
  const welcomeMessage = (`It’s a dark damp night and you swear you heard a soft whisper\n You think maybe that was just in your head?. \nYou need to decide, Should I really continue.`);
  
  if (welcomeMessage === "yes" || "y")
  console.log ("Lets go.")
  
  
  let answer = await ask(welcomeMessage);
  let userName = await ask("What is your name?")
  
  
  //console.log(` `)
  console.log(`Hello,  ${userName}, let's get started.`)
  //process.exit();
}
class Room {
  constructor(description, inventory, left, right, straight, back);
    
  this.description = description;
  this.inventory = inventory;
  this.left = left;
  this.right = right;
  this.straight = straight;
  this.back = back;
}

//while(answer !== 'exit') {
 //answer = await ask('>_ ')
//}
//let sign = {
  //description: "The code to enter is 12345.\nEnter at your own risk. "
  //read: () => {
    //return this.description
  //}
//}