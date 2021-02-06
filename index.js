const readline = require("readline");
//const { Console } = require("console");
//const readline = require("readline");
//const { start } = require("repl");
const readlineInterface = readline.createInterface(
 // process.stdin,
 // process.stdout
);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}
//console.log(
  
async function start() {
  const welcomeMessage = `It’s a dark damp night and you are on the road out in front of 182 Main St.\n and you swear you heard a soft whisper.\nYou think maybe that was just in your head. \nYou need to decide, Do you really want to continue.?`;
  
  let answer = await ask(welcomeMessage);
  
  
  let userName = await ask("What is your name?");
  
  //if yes lets start the game
  if (answer === "yes" || "y")
    //console.log ("Lets go.")

    //console.log(` `)
    console.log(`Ok, ${userName}, Let us begin.\nHead for the front door of City Hall right behind you.`
    );

  while (answer !== "exit") {
    answer = await ask(">_ ");
  }
  //if (code1 !== 123
  //console.log("The sign says \"Welcome to City Hall.\n To enter you must input this code "12345" "in the keypad below".")
  
  //if (answer !== "yes", )   
  
 // const welcomeMessage = ('Welcome to Jack and Nick game' );
  
    //console.log (`It’s a dark damp night and you are on the road out in front of 182 Main St. and you swear you heard a soft whisper.\nYou think maybe that was just in your head. \nYou need to decide, Do you really want to continue.?`)
 //let answer = Response
 // if (answer !== "yes" || "y") {
    //console.log ('I'/'m sorry I did not cattch you', ${answer}
  
  }
  

  let userName = await ask("What is your name?")
  let answer = await ask(welcomeMessage);
  let code = await ask("can you type in the code")
  
  if (code == 12345) {start()}
  
  console.log ('Success! welcome'/ ${userName} 'to city hall on all hallows eve')
  //else console goodbye 
  //{process.out} 
  //console.log ("Lets go.")
  //
  //console.log(` `)
  console.log(`Ok, ${userName}, Let us begin.\nHead for the front door at City Hall right behind you. HURRY!`)
  
  console.log("There is a not on the door that reads.\n To enter you must input this code)
  
  //"12345" in the keypad below.")


  
  
  
  //console.log("Sorry, I don't know how to  _____");

  //let sign = {
  //description: "The code to enter is 12345.\nEnter at your own risk. "
  //read: () => {
  //return this.description
  //}
  //}

  //console.log("There is a sign on the door that reads.\n To enter you must input this code 12345, in the keypad below.")
  //console.log("You have three tries to get it right.\n If you fail you die.")
  //}else{
  //console.log("You have entered the Entrance Hall, you have three choices where to go.\n To the left is a nice sunny lit hallway with people working in their offices.\n to the right is a dark dreary hallway with cobwebs covering the entrance.\n Straight ahead is a huge marble staircase that has been roped off with a sign that reads AUTHORIZED PERSONNEL ONLY.\n What way will you choose?")

  //console.log("You can't go that way")
  //process.exit();
}
//class Rm {
//constructor(description, inventory, left, right, straight, back);

// this.description = description;
// this.inventory = inventory;
//this.left = left;
// this.right = right;
//this.straight = straight;
// this.back = back;
//}
let antiRm = ['stairCase','darkHall', 'brightHall', 'sign'] 
let study = ['books', 'spiders','redCarpet', 'door', 'door']
let sachel = ['']

//class Rm {
 // constructor(description, inventory, left, right, straight, back);
  //this.description = description;
  //this.inventory = inventory;
 //this.left = left;
 //this.right = right;
 //this.straight = straight;
 //this.back = back;
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
