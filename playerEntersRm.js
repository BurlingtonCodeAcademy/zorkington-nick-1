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
let userName = "player"
let stick = toString.weapon
let hammer = toString.weapon2
let satchel = {'size':'large', 'color':'tan', 'material':'goatSkin'}
let inSatchel ={'nothing':'air'}

start (),

async function enter 
  
console.log('you check the door and it is unlocked')


