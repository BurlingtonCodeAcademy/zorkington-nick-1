const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

start();

async function start() {
  const welcomeMessage = (`It’s a dark damp night and you swear you heard a soft whisper\n You think maybe that was just in your head?. \nYou need to decide, Should you really continue.`);
  //while(answer !== 'exit') {
 //answer = await ask('>_ ')
//}
  //console.log("I don't know how to do _____");
//let sign = {
  //description: "The code to enter is 12345.\nEnter at your own risk. "
  //read: () => {
    //return this.description
  //}
  //}
  if (welcomeMessage === "yes" || "y")
  console.log ("Lets go.")
  
  let userName = await ask("What is your name?")
  let answer = await ask(welcomeMessage);
  
  
  
  //console.log(` `)
  console.log(`Hello,  ${userName}, let's get started.`)
  //process.exit();
}
//class Room {
  //constructor(description, inventory, left, right, straight, back);
    
 // this.description = description;
 // this.inventory = inventory;
  //this.left = left;
 // this.right = right;
  //this.straight = straight;
 // this.back = back;
//}
//describe(){
 // return 
//}
//let myRoom = new Room("")

//console.log(myRoom.describe())

//let orderArr = process.argv.slice(2);

//orderArr.forEach((items) => {
  //orderTotal += menu[items];
//});





//let sign = {
  //description: "The code to enter is 12345.\nEnter at your own risk. "
  //read: () => {
    //return this.description
  //}
  //}