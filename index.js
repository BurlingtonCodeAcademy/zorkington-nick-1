const { Console } = require("console");
const { exit } = require("process");
const readline = require("readline");
const r1 = readline.createInterface(process.stdin, process.stdout);

// Global Variables
let count = 0;

//state machine
let rooms = {
  mainStreet: { canChangeTo: ["cityHall"] },
  cityHall: { canChangeTo: ["antiChamber"] },
  antiChamber: { canChangeTo: ["hallWay"] },
  hallWay: { canChangeTo: ["roomOne", "roomTwo", "roomThree"] },
  roomOne: { canChangeTo: ["hallWay"] },
  roomTwo: { canChangeTo: ["hallWay"] },
  roomThree: { canChangeTo: ["hallWay"] },
};
let currentRoom = "mainStreet";

let antiChamber;
let hallWay;
let roomOne;
let roomTwo;
let roomThree;

class Room {
  constructor(name, description, inventory, left, right, straight, back) {
    this.name = name;
    this.description = description;
    this.inventory = inventory;
    this.left = left;
    this.right = right;
    this.straight = straight;
    this.back = back;
  }
}

const mainStreet = new Room(
  "main street",
  "main street description",
  [],
  null,
  null,
  true,
  null
);
const cityHall = new Room(
  "city hall",
  "city hall description",
  [],
  null,
  null,
  true,
  null
);
let roomLookUp = {
  mainStreet: mainStreet,
  cityHall: cityHall,
  antiChamber: antiChamber,
  hallWay: hallWay,
  roomOne: roomOne,
  roomTwo: roomTwo,
  roomThree: roomThree,
};
//tracks if the current room can change to new room
function changeRoom(newRoom) {
  let validTransitions = rooms[currentRoom].canChangeTo;
  if (validTransitions.includes(newRoom)) {
    currentRoom = newRoom;
    let roomForTable = roomLookUp[currentRoom];
    console.log(currentRoom);
    console.log(roomForTable.description);
    console.log(roomForTable.straight)
  } else {
    console.log("doors locked");
  }
}

// Function Setting Up `ask()`
function ask(questionText) {
  return new Promise((resolve, reject) => {
    r1.question(questionText, resolve);
  });
}

// Calling the Start function to start the game initially.
start();

// The Start function itself handles the intro description and can call functions for other locations such as `SourHall` .
async function start() {
  // Take in users first response.
  let response = await ask(
    'It’s a dark damp night and you are on the road out in front of 182 Main St. and you swear you heard a soft whisper.\n\n"Would you like to play a game?\n\nYou think maybe that was just a thought in your head.\n \nYou need to decide\n\nThe voice returns\n\nHave you decided?\n\nONLY respond with a Yes or a No"\n\n>_'
  );
  // Check if the response is yes.
  if (response == "yes") {
    //If yes, then console log this text so the game proceeds, Call the sourHall function once done.
    console.log(
      "You may proceed the the entrance door of City Hall\nThere you will find a note, follow its instructions perfectly\nYou find the note sitting on a numerical key pad.\nThe note is simple, You will have 3 chances to put this code in correctly\n Code 1234"
    );
    changeRoom("cityHall");
  } else {
    // If no, console log and end the program with process.exit()
    console.log(
      "I am sorry you do not want to play\n you can always change your mind, I will be here"
    );
    process.exit();
  }
}
