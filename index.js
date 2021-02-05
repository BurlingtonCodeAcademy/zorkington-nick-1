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
  
async function start() {
  const welcomeMessage = ('Welcome to Jack and Nick game' );
  
    console.log (`It’s a dark damp night and you are on the road out in front of 182 Main St. and you swear you heard a soft whisper.\nYou think maybe that was just in your head. \nYou need to decide, Do you really want to continue.?`)
 let answer = Response
  if (answer !== "yes" || "y") {console.log ('I'/'m sorry I did not cattch you', ${answer}
  
  }
  

  let userName = await ask("What is your name?")
  let answer = await ask(welcomeMessage);
  let code = await ask("can you type in the code")
  
  if (code == 12345) {start()}
  
  cponsole.log ('Success! welcome'/ ${userName} 'to city hall on all hallows eve')
  //else console goodbye 
  //{process.out} 
  //console.log ("Lets go.")
  //
  //console.log(` `)
  console.log(`Ok, ${userName}, Let us begin.\nHead for the front door at City Hall right behind you. HURRY!`)
  
  console.log("There is a not on the door that reads.\n To enter you must input this code)
  
  //"12345" in the keypad below.")

  //console.log("You have three tries to get it right.\n If you fail you die.")
  //}else{
  //console.log("You have entered the Entrance Hall, you have three choices where to go.\n To the left is a nice sunny lit hallway with people working in their offices.\n to the right is a dark dreary hallway with cobwebs covering the entrance.\n Straight ahead is a huge marble staircase that has been roped off with a sign that reads AUTHORIZED PERSONELL ONLY.\n What way will you choose?")
  
  
  //process.exit();
}
let antiRm = ['stairCase','darkHall', 'brightHall', 'sign'] 
let study = ['books', 'spiders','redCarpet', 'door', 'door']
let sachel = ['']

class Room {
  constructor(description, inventory, left, right, straight, back);
  this.description = description;
  this.inventory = inventory;
 this.left = left;
 this.right = right;
 this.straight = straight;
 this.back = back;
}
//describe(){
 // return 
//}
//let myRoom = new Room("")

//console.log(myRoom.describe())

//let orderArr = process.argv.slice(2);

//orderArr.forEach((items) => {
  //orderTotal += menu[items];
//});





