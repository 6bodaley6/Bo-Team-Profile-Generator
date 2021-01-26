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
        res.id,
        res.email,
        res.officeNumber
      );
      teamMates.push(manager);
      addTeamates();
    });
};
const addIntern = () => {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is the new Interns name?",
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
        message: "What is their email",
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
        message: "What is the new Interns id?",
        validate: (id) => {
          if (id) {
            return true;
          }
          return "ERROR PLEASE INSTERT CHARACTER";
        },
      },
      {
        name: "internsSchool",
        type: "input",
        message: "What is the new Interns school?",
        validate: (internsSchool) => {
          if (internsSchool) {
            return true;
          }
          return "ERROR PLEASE INSTERT CHARACTER";
        },
      },
    ])
    .then((res) => {
      const intern = new Intern(res.name, res.id, res.email, res.internsSchool);
      teamMates.push(intern);
      addTeamates();
    });
};
const addEngineer = () => {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is the new Engineer name?",
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
        message: "What is their email",
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
        message: "What is the new Engineer id?",
        validate: (id) => {
          if (id) {
            return true;
          }
          return "ERROR PLEASE INSTERT CHARACTER";
        },
      },
      {
        name: "github",
        type: "input",
        message: "What is the github username?",
        validate: (engineersGithub) => {
          if (engineersGithub) {
            return true;
          }
          return "ERROR PLEASE INSTERT CHARACTER";
        },
      },
    ])
    .then((res) => {
      const engineer = new Engineer(res.name, res.id, res.email, res.github);
      teamMates.push(engineer);
      addTeamates();
    });
};
const createHtml = () => {
  console.log(teamMates);
};
const addTeamates = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "whoToAdd",
        message: "Who Do you want to add?",
        choices: ["Engineer", "Intern", "Quit?"],
      },
    ])
    .then((res) => {
      if (res.whoToAdd === "Engineer") {
        addEngineer();
      } else if (res.whoToAdd === "Intern") {
        addIntern();
      } else {
        createHtml();
      }
    });
};
addManager();
