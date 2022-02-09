const prompt = require('prompt-sync')();

let sides = Number(prompt("How many sides does the dice have: "))

let dice = Math.floor(Math.random() * sides) + 1;

console.log(dice);