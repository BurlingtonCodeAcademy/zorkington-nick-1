//this sectoion was goiven
const { Console } = require("console");
const readline = require("readline");
const { begin } = require("repl");
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
}//end of given (see first note)

//creating rooms and player: classes, groups and arrays; week 2 objects method, slide 2- and OsJs slide 9 = definition 

//Satchel is where you'll find what player has picked up 
class Satchel {constructor(){}}

//creating rooms
class anteChamber{
  constructor(darkHall, brightHall, stairs, sign,door1, door2){
    this.darkHall = darkHall;
    this.brightHall = brightHall;
    this.stairs = stairs;
    this.sign = sign;
    this.door1 = door1;
    this.door2 = door2;
  }
}
//objects player must pick up
class grabIt{
  constructor(stick, hammer){
    this.stick = stick;
    this.hammer = hammer;
  }
}
//Objects player can pickup but must leave there
class moveableObjects{
  constructor(spiders)
  {this.spiders = spiders;
  }
}
class dropped{constructor(stick, hammer)
  {this.stick=stick;
  this.hammer=hammer;
  }
}
//
start();
async function start() {
  const welcomeMessage = `It’s a dark damp night and you are on the road out in front of 182 Main St.\n and you swear you heard a soft whisper.\nYou think maybe that was just in your head. \nYou need to decide, Do you really want to continue.?`;
  
  let answer = await ask(welcomeMessage);
  
  
  let userName = await ask("What is your name?");
  
  //if yes lets start the game
  if (answer === "yes" || answer === "y")
  console.log ("Lets go.")

    //console.log(` `)
    console.log(`Ok, ${userName}, Let us begin.\nHead for the front door of City Hall right behind you.`
    );

  while (answer !== "exit") {
    answer = await ask(">_ ");
  }
  
  let sign = {
  description: "The code to enter is 1234.\nEnter at your own risk. "
  //read: () => {
  //return this.description
  }
  }
  
  
  //if (doorCode !== 1234){
  //console.log("The sign says \"Welcome to City Hall.\n To enter you must input this code ",1,2,3,4," in the, keypad, below.")
  //} 
  if (answer !== "yes", )   
  
  console.log("There is a sign on the door that reads.\n To enter you must input this code 12345, in the keypad below.")
  console.log("You have three tries to get it right.\n If you fail you die.")
  }else{
  console.log("You have entered the Entrance Hall, you have three choices where to go.\n To the left is a nice sunny lit hallway with people working in their offices.\n to the right is a dark dreary hallway with cobwebs covering the entrance.\n Straight ahead is a huge marble staircase that has been roped off with a sign that reads AUTHORIZED PERSONNEL ONLY.\n What way will you choose?")
  let doorCode = await ask(description);
  let count = 0
  console.log("The sign says \"Welcome to City Hall.\n To enter you must input this code ",1,2,3,4," in the, keypad, below.")
  if (doorCode === 12345){console.log("enter")
    } 
  else{while (count<4){console.log("You've had three tries/n You are not serious, go home to mother dear."), process.exit}
  let count = count + 1
  
  //entering first rm

  }
//creating rooms and player: week
  console.log("You have entered the Antechamber you have three choices where to go.\n To the left is a nice sunny lit hallway with people working in their offices.\n to the right is a dark dreary hallway with cobwebs covering the entrance.\n Straight ahead is a huge marble staircase that has been roped off with a sign that reads AUTHORIZED PERSONNEL ONLY.\n Which way will you choose?/n Left, Right or straight/n Meanwhile, you heard the door lock behind you")
  //function lockDoor {}
  
direction; await.ask("left, right or straight")
  let (left === brightHall, right === darkHall, straight === stairs)
if (left) {console.log("you are standing at the entrance to the sunny lit hallway/n you hear people working, but you remember/n It was dark outside, so where is the sun coming from?, /n DO YOU ENTER/n Yes or No?")}

console.log("Inside the dark hallway is a door that leads to the basement. At the bottom of the stairs the room opens up to reveal a table to right with a hammer. Deeper into the room you see a set of glowing green eyes that keep blinking out in the corner.   ")

console.log("Straight ahead is the staircase you jump over the sign that says AUTHORIZED PERSONNEL ONLY and make your way up the stairs to the second floor.\nAt the top of the stairs there is another long hallway with many doors, but there is a door on the left that catches your eye, inside you find the door has lead you into an office with a large desk in one corner with two chairs in front.\nIn the opposite corner you see a cart that used to house a mini bar but almost everything has been tipped over and broken.\n A bottle of Scotch is the only thing remaining.  ")

//creating rooms and player: 
class Satchel{ 
  constructor(weapon1){
     this.weapon1 = weapon1;
  }
}
class antechamber{
  constructor(darkHall, brightHall, stairs, sign, inventory){
    this.darkHall = darkHall;
    this.brightHall = brightHall;
    this.stairs = stairs;
    this.sign = sign;
    this.inventory = inventory;
  }
}
class action{
    constructor(read, take, drop, open, move, climb, enter, out, jump, listen, right, left, forward, back, fight, kill){
      this.read = read;
      this.take = take;
      this.drop = drop;
      this.open = open;
      this.move = move;
      this.climb = climb;
      this.enter = enter;
      this.out = out;
      this.jump = jump;
      this.listen = listen;
      this.right = right;
      this.left = left;
      this.forward = forward;
      this.back = back;
      this.fight = fight;
      this.kill = kill;

    }
  }
  if (command === inventory || command === i || command === 'take inventory');

//describe(){
// return
//}
//let myRoom = new Room("")

//console.log(myRoom.describe())   
 // )}



// put in or remove from satchel; week 2 slide 12 - 
if (drop === stick ||drop === hammer){push}
if (grabIt === stick ||drop === hammer) {console.log('good move'), satchel.push
}
else( ) => {console.log ('you might need that stick for later\n I am just saying all it takes is to spellout /n stick /n or /n hammer')
}

//start ()
//Self explanitory
console.log("welcome to Nick's Jack's Likely Unfinished Game\n \n");

console.log("Have the Time Of Your Life!!");

let anteChamber = ["stairCase", "darkHall", "brightHall", "sign"]
;
    
let study = ["books", "spiders", "redCarpet", "door", "door"];
    let sachel = [""]
 
  }
}   
