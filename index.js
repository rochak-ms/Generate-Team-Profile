// team profiles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// node modules
const fs = require("fs");
const { default: inquirer } = require("inquirer");
// link to create page
const generatePage = require("./src/htmlGenerator");

// Team array
const teamArray = [];

// start Of Manager prompts
const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Who is the Manager of this team?\n",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the Manager's name!\n");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "id",
        message: "Please enter the Manager's ID.\n",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter the Manager's ID.\n");
            return false;
          } else {
            console.log("Please enter a valid work ID!\n");
            return true;
          }
        },
      },

      {
        type: "input",
        name: "email",
        message: "Please enter the Manager's email.\n",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("Please enter an email!\n");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "officeNumber",
        message: "Please enter the Manager's office number.",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter an office number");
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);

      teamArray.push(manager);
      console.log(manager);
    });
};
