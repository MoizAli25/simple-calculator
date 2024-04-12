#! /usr/bin/env node

import inquirer from "inquirer";

const asnwer = await inquirer.prompt([
  {
    message: "Enter first number",
    type: "number",
    name: "firstnumber",
  },
  {
    message: "Enter second number",
    type: "number",
    name: "secondnumber",
  },
  {
    message: "select on of the operator to perform action",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "division", "multiplication"],
  },
]);

//conditional statement

if (asnwer.operator === "addition") {
  console.log(asnwer.firstnumber + asnwer.secondnumber);
} else if (asnwer.operator === "subtraction") {
  console.log(asnwer.firstnumber - asnwer.secondnumber);
} else if (asnwer.operator === "multiplication") {
  console.log(asnwer.firstnumber * asnwer.secondnumber);
} else if (asnwer.operator === "division") {
  console.log(asnwer.firstnumber / asnwer.secondnumber);
} else {
  console.log("please select valid number");
}
