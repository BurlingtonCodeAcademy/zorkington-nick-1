//this sectoion was goiven
const { Console } = require("console");
const readline = require("readline");
//const { start } = require("repl");
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
)

start()
async function start() {
function ask(questionText) {
  return new Promise((resolve, reject) => {
    r1.question(questionText), resolve;
  });
}
//end of given (see first note)

//creating rooms and player: classes, groups and arrays; week 2 objects method, slide 2- and OsJs slide 9 = definition 

//Satchel is where you'll find what player has picked up 
class Satchel {constructor(){}}

//creating rooms
class anteChamber{
  constructor(darkHall, brightHall, stairs, sign,door1, door2){
    this.darkHall = darkHall
    this.brightHall = brightHall
    this.stairs = this.stairs
    this.sign = sign
    this.door1 = door1
    this.door2 = door2
  }
}
//objects player must pick up
class grabIt{
  constructor(stick, hammer){
    this.stick=stick
    this.hammer=hammer
  }
}
//Objects player can pickup but must leave there
class moveableObjects{
  constructor(spiders)
  {
    This.spider=spider
  }
}
class dropped{constructor(stick, hammer)
  {
  this.stick=stick
  this.hammer=hammer
  }
}


// put in or remove from satchel; week 2 slide 12 - 
//if (drop = stick || hammer){push}
//if (grabIt = stick || hammer) {console.log('good move'), satchel.push
//}
 //else( ) => {console.log ('you might need that stick for later\n I am just saying all it takes is to spellout need')
//}

start ()
//Self explanitory
console.log("welcome to Nick's Jack's Likely Unfinished Game\n \n");

console.log("Have the Time Of Your Life!!");

//The game starts now with the opening scene,
async function start() {
  const welcomeMessage = `It’s a dark damp night and you are on the road out in front of 182 Main St. and you swear you heard a soft whisper.\nWould you like to play a game?\nYou think maybe that was just in your head. \nYou need to decide, Do you really want to continue.?n\ONLY respond with a Yes or a No`;
  console.log(welcomeMessage)
  //The potentioal player needs to respond with a Y or N to move on
  //The response is evaluated to determine if they move on
  process.stdin.once("data", (yesOrNo) => {let yesOrNo = "opening".toLowerCase. trim(1)
  });
  
  if (opening = y||n) {
  return}
  else {console.log("Please respond with a Y or N");
  }
  let userName = await ask("What is your name?"); //we wait for their response
  Let (answer) = player

  //The first room

  console.log(
    "See the entrance door to City Hall?\n There is a note there, read that note and respond Immediately\n You will have three three (3!) tries to get it correctly\n \n \nThe note sitting on a key reads\n  \n  \nWelcome",
    $(answer),
    "the code is 12345"
  );

  //process.stdin('data', (count) =>{})
  //if count = 4

  if (code == 12345) {
    start();
  }

  cponsole.log("Success! welcome, ${userName} to city hall on all hallows eve");
  //else console goodbye
  //{process.out}
  //console.log ("Lets go.")
  //
  //console.log(` `)
  console.log(
    `Ok, ${userName}, Let us begin.\nHead for the front door at City Hall right behind you. HURRY!`
  );

  console.log(
    "There is a note on the door that reads.\n To enter you must input this code"
  );
  
  
  //useful functions 

  // pickUp and drop functions :push, pull, slice, trim. look in week 2; arrays
//pickUp
process.stdin.once('data', (pickedUp)=>{pickedUp.toString()})
if (pickedUp) {console.log('smart move')}
}  
//drop item

function dropIt() {pop()
  console.log(player.inventory.indexOf())
  player.inventory.splice (player.inventory.indexOf(dropItem) )
}

  let antiRm = ["stairCase", "darkHall", "brightHall", "sign"];
  let study = ["books", "spiders", "redCarpet", "door", "door"];
  let sachel = [""];

  //class Room {
  //constructor(description, inventory, left, right, straight, back);
  // this.description = description;
  // this.inventory = inventory;
  //this.left = left;
  //this.right = right;
  //this.straight = straight;
  //this.back = back;

  //describe(){
  // return
  //}
  //let myRoom = new Room("")

  //console.log(myRoom.describe())

  //let orderArr = process.argv.slice(2);

  //orderArr.forEach((items) => {
  //orderTotal += menu[items];
  //});
}
