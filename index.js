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
// the asyn function covering the whole project from here on
async function start() {
  let response = await ask(
    'It’s a dark damp night and you are on the road out in front of 182 Main St. and you swear you heard a soft whisper.\n\n" Would you like to play a game?\n\nYou think maybe that was just a thought in your head.\n \nYou need to decide\n\n then voice returns\n'
  );
  // our first use of the async coveerage
  let answer = await ask(
    '"Have you decided?\n\nONLY respond with a\n \nYes or a No"\n\n'
  );
  process.stdin.once("data", (answer) => {
    let response = answer.toString().toLowerCase.trim();
  });

  if ((response = y)) {
    //This is where we got stuck, not too far into the game.
    console.log(
      "you may preceed the the entrant door of City Hall\n there you will find a note, follow its instuctions perfectly"
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
  //givine the player 3 trys to get the code correct
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

//from here out its stuff we had readyf to go...

//    if (code === 12345) {start()}
    
  //  console.log ('Success! welcome'/ ${userName} 'to city hall on all hallows eve')
    
    //else console goodbye 
    //{process.out} 
    //The first room
  
    //console.log(
     // "See the entrance door to City Hall?\n There is a note there, read that note and respond Immediately\n You will have three three (3!) tries to get it correctly\n \n \nThe note sitting on a key reads\n  \n  \nWelcome",
     // $(answer),
     // "the code is 12345"
    
  
     //process.stdin('data', (count) =>{})
     //if count = 4
   
    // if (code == 12345) {
      // start();
     
   
     //cponsole.log("Success! welcome, ${userName} to city hall on all hallows eve");
     //else console goodbye
     //{process.out}
     //console.log ("Lets go.")
     //
     //console.log(` `)
     //console.log(
      // `Ok, ${userName}, Let us begin.\nHead for the front door at City Hall right behind you. HURRY!`
     
    
   //let orderArr = process.argv.slice(2);
   
   //orderArr.forEach((items) => {
   //orderTotal += menu[items];
   //});
     //console.log(
       //"There is a note on the door that reads.\n To enter you must input this code"
     
     
     
     //useful functions 
   
     // pickUp and drop functions :push, pull, slice, trim. look in week 2; arrays
   //pickUp
   //process.stdin.once('data', (pickedUp)=>{pickedUp.toString()})
   //if (pickedUp) {console.log('smart move')}
   
   //drop item
   
   //function dropIt() {pop()
   //  console.log(player.inventory.indexOf())
   //  player.inventory.splice (player.inventory.indexOf(dropItem) )
   
   //process.stdin.once('data', (pickedUp)=>{pickedUp.toString()})
     //if (player) pickedUp =  true {}
     
   //drop item
   //function dropIt{dropItem){
     //console.log(player.invetory.indexOf())
     //player.inventory.splice (player.inventory.indexOf(dropItem) )
   //}
   
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
   
