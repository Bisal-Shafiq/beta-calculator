#! /usr/bin/env node

import inquirer from "inquirer"

const answer = await inquirer.prompt([
    { message: "Enter First number", type: "number", name: "firstNumber" },
    { message: "Enter Second number", type: "number", name: "secondNumber" },
    {
      message: "Select one of the operation to perform operation",
      type: "list",
      name: "Operator",
      choices: ["Addition", "Subtration", "Multiplication", "Division"],
    },
  ]);
  
  // conditional statement 
  
  if(answer.Operator === "Addition"){
      console.log(answer.firstNumber + answer.secondNumber);
  } else if (answer.Operator === "Subtration"){
      console.log(answer.firstNumber - answer.secondNumber);
  }  else if (answer.Operator === "Multiplication"){
      console.log(answer.firstNumber * answer.secondNumber);
  } else if (answer.Operator === "Division"){
      console.log(answer.firstNumber / answer.secondNumber);
  } else {
      console.log("Please Selest Valid Operator");
  }