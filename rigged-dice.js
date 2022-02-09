const prompt = require('prompt-sync')();

let sides = Number(prompt("How many sides does the dice have: "))

let rig = Number(prompt("What is the rigged number: "))

let dice = (Math.floor(Math.random() * sides) + 1);

if (dice >= (sides/2)) {
    console.log(dice);
} else {
    console.log(rig);
}
// * (sides*Math.pow(1/rig, 2))

