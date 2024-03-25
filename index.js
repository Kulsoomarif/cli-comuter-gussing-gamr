#!/usr/bin/env node
import inquirer from "inquirer";
//1 computer will generate a random number
//2 user input for gussing number
//3 comparing both numbers and give result 
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userguessed",
        type: "number",
        message: "please guess one number between 1-6:",
    }
]);
if (answers.userguessed === randomNumber) {
    console.log("Congratulations!!! you guessed the write number.");
}
else {
    console.log("You guessed the wrong number.");
}
