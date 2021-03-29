
const readline = require("readline");
const r1 = readline.createInterface(process.stdin, process.stdout);

// Global Variables
let count = 0;

//state machine
let rooms = {
  mainStreet: { canChangeTo: ["cityhall"] },
  cityhall: { canChangeTo: ["antechamber"] },
  antechamber: { canChangeTo: ["hallway"] },
  hallway: { canChangeTo: ["roomone", "roomtwo", "roomthree"] },
  roomone: { canChangeTo: ["hallway"] },
  roomtwo: { canChangeTo: ["hallway"] },
  roomthree: { canChangeTo: ["hallway"] },
};
let currentRoom = "mainStreet";

//Class constructors of the rooms
class Room {
  constructor(
    name,
    description,
    inventory,
    locked
  ) {
    this.name = name;
    this.description = description;
    this.inventory = [];
    this.locked = false;
  }
}

//Room Constructors
const mainStreet = new Room(
  "main street",
  "It’s a dark damp night and you are on the road out in front of 182 Main St.\n and you swear you heard a soft whisper.\nYou think maybe that was just in your head. \nYou need to decide, Do you really want to continue.? If yes than make your way over to City Hall across the street.",
  [],

  false
);
const cityhall = new Room(
  "city hall",
  "You walk up to City Hall. In front of you is a very large wooden door with a brass head of a lion as knocker. Behind you is the steps you just came up that funnel you to this massive door. You knock, the door swings open as if it was unlocked waiting for you. You step inside into what you can describe as the anti-chamber",
  [],

  false
);
const antechamber = new Room(
  "antechamber",
  "You have entered the Antechamber. Right to the right of you is an umbrella stand with a big stick in the case.\n There is a massive chandelier in the center of the ceiling. It seems to be ever so slightly blowing in the breeze.\n Meanwhile, you heard the door lock behind you. You say to your self maybe I should take the stick,\nDo you take the stick or not and leave your umbrella behind.\n You proceed down the only path available to you, a short hallway",
  ['stick',],

  false
);
const hallway = new Room(
  "hallway",
  "You have entered the Entrance Hall, which is short and has a coat room on your left. You decide to leave your rain jacket behind and gather the ticket stub for your jacket from this elderly, blue haired women.\nAt the end of the hallway you have three choices where to go.\n To the left is a nice sunny lit hallway with people working in their offices.\n to the right is a dark dreary hallway with cobwebs covering the entrance.\n Straight ahead is a huge marble staircase.\n What way will you choose?. ",
  [ticketStub],

  false
);
const roomone = new Room(
  "room one",
  "At the top of the stairs there is another long hallway with many doors, but there is a door on the left that catches your eye, inside you find the door has lead you into an office with a large desk in one corner with two chairs in front. On the desk is an old newspaper.\nIn the opposite corner you see a cart that used to house a mini bar but almost everything has been tipped over and broken.\n An untouched bottle of Scotch is the only thing remaining.",
  ['newsPaper', 'scotch'.],

  false
);
const roomtwo = new Room(
  "room two",
  "Back out in the hallway at the top of the stairs is a door to the right is another office, inside is yet another table and chairs with a mini bar in the corner that has only a bottle of Scotch remaining. On one wall of the office is a open window with a crow sitting on the ledge. All of a sudden the crow squawks and says 'leave now or regret it'. So you need to leave that room in a hurry but not before picking up the bottle of Scotch.",
  [scotch],

  false
);
const roomthree = new Room(
  "room three",
  "As your running down the hallway you check the door and find it is locked.",
  [],

  true
);

//Room Lookup table
let roomLookUp = {
  mainStreet: mainStreet,
  cityhall: cityhall,
  hallway: hallway,
  antechamber: antechamber,
  roomone: roomone,
  roomtwo: roomtwo,
  roomthree: roomthree,
};
//Tracks if the current room can change to new room
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
  this.name = name,
      this.description = description,
      this.takeable = true;
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

//Item lookup table
let itemLookUp = {
  stick: stick,
  scotch: scotch,
  newsPaper: newsPaper,
  rainJacket: rainJacket,
  ticketStub: ticketStub,
};

//Lookup table for actions
let actions = {
  move: ["move"],
  take: ["take"],
  drop: ["drop"],
  inspect: ["inspect"],
};

//player variables
const player = {
  inventory: [],
  location: null,
}


//Function Block

// Function Setting Up `ask()`
function ask(questionText) {
  return new Promise((resolve, reject) => {
    r1.question(questionText, resolve);
  });
}
//sanitize function
function sanitizedWord(dirtyInput) {
  let sanitized = dirtyInput.trim().toLowerCase();
  return sanitized;
}
//pickup function
function pickUp(takeIt) {
  let takeableItem = itemLookUp[takeIt]
  if(!takeableItem){
    console.log("That does not exsist in this room")
  } else if(takeableItem.takeable === true && player.location.inv.includes(takeIt)){
player.location.inv.splice(player.location.inv.indexOf(takeIt), 1)
player.inventory.push(takeIt)
console.log("You picked up the " + takeIt)
  } else {
    console.log("You can't take that!")
  }
}

//drop items function
function dropIt(trash) {
  if (player.inventory.includes(trash)) {
    player.inventory.splice(player.inventory.indexOf(trash), 1)
    player.location.inv.push(trash)
    console.log("You have dropped the " + trash)
  } else {
    console.log("You don't have this item")
  }
}
// examine items function
function lookAt(checkMe) {
  let lookAtItems = itemLookUp[checkMe]
  if(player.location.inv.includes(checkMe)) {
    console.log(lookAtItems.description)
  } else {
    console.log("Nothing to look at")
  }
}

// Calling the Start function to start the game initially.
start();

// The Start function itself handles the intro description and can call functions for other locations.
async function start() {
  console.log(
    "It’s a dark damp night and you are on the road out in front of 182 Main St. and you swear you heard a soft whisper.\nWould you like to play a game?\nYou think maybe that was just a thought in your head.\nInput commands as activity followed by room or item.[ie move cityhall]"
  );
    //while the player has not reached the final room run the game
  while (currentRoom !== roomthree) {
    // Take in users first response.
    let response = await ask(">_");
    //sanitize response
    let cleanInput = sanitizedWord(response);
    //split the response into an array with two strings assign the first string to the command variable and the second string to the activity variable
    let cleanArray = cleanInput.split(" ");
    let command = cleanArray[0];
    let activity = cleanArray[1];
    //if its a movement command and the command is in the actions word bank then call the changeroom function 
    if (actions.move.includes(command)) {
      changeRoom(activity);
    } else if (actions.take.includes(command)) {
      pickUp(activity)
    } else if (actions.drop.includes(command)) {
      dropIt(activity)
    } else if (actions.examine.includes(command)) {
      lookAt(activity)
    }
  }
}
