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
//Self explanitory
console.log('welcomeToNick\'sAJack\'SLightlyUnfinishedGame')

console.log('theTimeOfYourLife!!')
 
//The game starts now wioth the opening scene,
async function start() {
  const welcomeMessage = ( `It’s a dark damp night and you are on the road out in front of 182 Main St. and you swear you heard a soft whisper.\nWould you like to play a game?\nYou think maybe that was just in your head. \nYou need to decide, Do you really want to continue.?n\ONLY respond with a Yes or a No`);

  //The potentioal play needs to respond with a Y or N to move on
  //The response is evaluated to determine if they move on
  process.stdin('data',(yesOrNo) =>{let = yesOrNo.toString})

   if (yesOrNo == "yes" || "y" || "Y") {return}
  else {comsole.log ('Please respond with a Y or N')}
    let userName = await ask("What is your name?") //we wait for their 2 responses
  let answer = await ask("What is your name?");
  
//The first room

console.log ('See the entrance door to City Hall?\n There is a note there, read that note and respond Immediately\n You will have three three (3!) tries to get it correctly\n \n \nThe note sitting on a key reads\n  \n  \nWelcome' $(answer) 'the code is 12345')

  process.stdin('data', (count) =>{)})
  if count = 4 
  
  if (code == 12345) {start()}
  
  cponsole.log ('Success! welcome, ${userName} to city hall on all hallows eve')
  //else console goodbye 
  //{process.out} 
  //console.log ("Lets go.")
  //
  //console.log(` `)
  console.log(`Ok, ${userName}, Let us begin.\nHead for the front door at City Hall right behind you. HURRY!`)
  
  console.log("There is a note on the door that reads.\n To enter you must input this code)
  
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





