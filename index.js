// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a brief description of the project.",
  },
  {
    type: "list",
    name: "license",
    message: "Select the license type for your project.",
    choices: [
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      "ISC License",
      "Mozilla Public License 2.0",
      "Boost Software License 1.0",
      "The Unlicense",
      "I don’t want a license.",
    ],
  },
  {
    type: "input",
    name: "instalation",
    message: "Instruct your audience on installing and setting up your app.",
  },
  {
    type: "input",
    name: "usage",
    message: "Describe how the project can be used.",
  },
  {
    type: "input",
    name: "credits",
    message: "List resources you would like to give credit to.",
  },
  {
    type: "input",
    name: "contributing",
    message: "Describe how the contributions to the project can be made.",
  },
  {
    type: "input",
    name: "tests",
    message:
      "Provide tests for your application and give examples on how to run them.",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "github",
    message: "What is the link to your github?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // generateMarkdown(data) = readmeContent;
  const readmeContent = generateMarkdown(data);
  fs.writeFile(fileName, readmeContent, (err) =>
    err ? console.error(err) : console.log("Your README is saved!")
  );
}

// TODO: Create a function to initialize app
function init(questions) {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    const fileName = "README.md";
    writeToFile(fileName, data);
  });
}

// Function call to initialize app
init(questions);
