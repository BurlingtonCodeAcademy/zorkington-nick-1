const { doesNotReject } = require("assert");
const { triggerAsyncId } = require("async_hooks");
const { Console } = require("console");
const { SSL_OP_CRYPTOPRO_TLSEXT_BUG } = require("constants");
const { exit } = require("process");
const readline = require("readline");
const r1 = readline.createInterface(process.stdin, process.stdout);

// Global Variables
let count = 0;

//state machine
let rooms = {
  mainStreet: { canChangeTo: ["cityHall"] },
  cityHall: { canChangeTo: ["anteChamber"] },
  anteChamber: { canChangeTo: ["hallWay"] },
  hallWay: { canChangeTo: ["roomOne", "roomTwo", "roomThree"] },
  roomOne: { canChangeTo: ["hallWay"] },
  roomTwo: { canChangeTo: ["hallWay"] },
  roomThree: { canChangeTo: ["hallWay"] },
};
let currentRoom = "mainStreet";

//Class constructors of the rooms
class Room {
  constructor(
    name,
    description,
    inventory,
    left,
    right,
    straight,
    back,
    locked
  ) {
    this.name = name;
    this.description = description;
    this.inventory = [];
    this.left = left;
    this.right = right;
    this.straight = straight;
    this.back = back;
    this.locked = false;
  }
}

//Room Constructors
const mainStreet = new Room(
  "main street",
  "It’s a dark damp night and you are on the road out in front of 182 Main St.\n and you swear you heard a soft whisper.\nYou think maybe that was just in your head. \nYou need to decide, Do you really want to continue.? If yes than make your way over to City Hall across the street.",
  [],
  null,
  null,
  true,
  null,
  false
);
const cityHall = new Room(
  "city hall",
  "You walk up to City Hall. In front of you is a very large wooden door with a brass head of a lion as knocker. Behind you is the steps you just came up that funnel you to this massive door. You knock, the door swings open as if it was unlocked waiting for you. You step inside into what you can describe as the anti-chamber",
  [],
  null,
  null,
  true,
  null,
  false
);
const anteChamber = new Room(
  "ante chamber",
  "You have entered the Antechamber. Right to the right nof you is an umbrella stand with a big stick in the case.\n There is a massive chandelier in the center of the ceiling. It seems to be ever so slightly blowing in the breeze.\n Meanwhile, you heard the door lock behind you. You say to your self maybe I should take the stick,\nDo you take the stick or not and leave your umbrella behind.\n You proceed down the only path available to you, a short hallway",
  [stick],
  null,
  null,
  true,
  null,
  false
);
const hallWay = new Room(
  "hallway",
  "You have entered the Entrance Hall, which is short and has a coat room on your left. You decide to leave your rain jacket behind and gather the ticket stub for your jacket from this elderly, blue haired women.\nAt the end of the hallway you have three choices where to go.\n To the left is a nice sunny lit hallway with people working in their offices.\n to the right is a dark dreary hallway with cobwebs covering the entrance.\n Straight ahead is a huge marble staircase.\n What way will you choose?. ",
  [portrait],
  true,
  true,
  true,
  true,
  false
);
const roomOne = new Room(
  "room one",
  "At the top of the stairs there is another long hallway with many doors, but there is a door on the left that catches your eye, inside you find the door has lead you into an office with a large desk in one corner with two chairs in front. On the desk is an old newspaper.\nIn the opposite corner you see a cart that used to house a mini bar but almost everything has been tipped over and broken.\n A untouched bottle of Scotch is the only thing remaining.",
  [],
  null,
  null,
  true,
  true,
  false
);
const roomTwo = new Room(
  "room two",
  "Back out in the hallway at the top of the stairs is a door to the right is another office, inside is yet another table and chairs with a mini bar in the corner that has only a bottle of Scotch remaining. On one wall of the office is a open window with a crow sitting on the ledge. All of a sudden the crow squawks and says 'leave now or regret it'. So you need to leave that room in a hurry but not before picking up the bottle of Scotch.",
  [scotch],
  null,
  null,
  true,
  true,
  false
);
const roomThree = new Room(
  "room three",
  "As your running down the hallway you check the door and find it is locked.",
  [],
  null,
  null,
  true,
  true,
  false
);

//Room Lookup table
let roomLookUp = {
  mainStreet: mainStreet,
  cityHall: cityHall,
  anteChamber: anteChamber,
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
  } else {
    console.log("doors locked");
  }
}

//Class Constructor for items
class Items {
  constructor(name, description, takeable) {
    (this.name = name),
      (this.description = description),
      (this.takeable = true);
  }
}

//Items constructor
const stick = new Items(
  "stick",
  "Large wooden walking stick in case the path before gets rough",
  true
);
const scotch = new Items(
  "scotch",
  "An untouched, vintage 75 year old, highland, Single Malt Bottle of Scotch with some dust gathering on it.",
  true
);
const newsPaper = new Items(
  "news paper",
  "A Newspaper, October 31st, 1946.",
  false
);
const rainJacket = new Items(
  "rain jacket",
  "A slightly, damp, rain jacket from the cold wet outside weather.",
  true
);
const ticketStub = new Items(
  "ticket stub",
  "You receive a ticket stub for your rain jacket, also on the back it reads:'Good for 1 Free Bottle of Scotch'",
  true
);

//item lookup table
let itemLookUp = {
  stick: stick,
  scotch: scotch,
  newsPaper: newsPaper,
  rainJacket: rainJacket,
  ticketStub: ticketStub,
};

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
    //If yes, then console log this text so the game proceeds, Call the =city hall function once done.
    console.log(
      "You may proceed the the entrance door of City Hall\nThere you will find a note, follow its instructions perfectly\n"
    );
    changeRoom("");
  } else {
    // If no, console log and end the program with process.exit()
    console.log(
      "I am sorry you do not want to play\n you can always change your mind, I will be here"
    );
    process.exit();
  }
}
