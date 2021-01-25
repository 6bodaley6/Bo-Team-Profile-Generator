const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const outputFolder = path.resolve(__dirname, "output");
const outputFile = path.join(outputFolder, "team.html");

const teamMates = [];

const addManager = () => {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is the new Managers name?",
        validate: (name) => {
          if (name) {
            return true;
          }
          return "ERROR PLEASE INSTERT CHARACTER";
        },
      },
      {
        name: "email",
        type: "input",
        message: "What is your email",
        validate: (email) => {
          if (email) {
            return true;
          }
          return "ERROR PLEASE INSTERT CHARACTER";
        },
      },
      {
        name: "id",
        type: "input",
        message: "What is the new Managers id?",
        validate: (id) => {
          if (id) {
            return true;
          }
          return "ERROR PLEASE INSTERT CHARACTER";
        },
      },
      {
        name: "officeNumber",
        type: "input",
        message: "What is the new Managers officeNumber?",
        validate: (officeNumber) => {
          if (officeNumber) {
            return true;
          }
          return "ERROR PLEASE INSTERT CHARACTER";
        },
      },
    ])
    .then((res) => {
      const manager = new Manager(
        res.name,
        res.email,
        res.id,
        res.officeNumber
      );
      teamMates.push(manager);
      addTeamates();
    });
};
addManager();
const addTeamates = () => {
  inquirer
    .prompt([
      {
        name: "choice",
        type: "input",
        massage: "Who Do you want to add?",
        choices: ["Engineer", "Intern", "Quit?"],
      },
    ])
    .then((res) => {});
  //if statements to  check answers from prompt
};
