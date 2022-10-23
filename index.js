// link to create page
const generatePage = require("./src/htmlGenerator");

// team profiles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// node modules
const fs = require("fs");
const { default: inquirer } = require("inquirer");

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
        }
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
        }
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
        }
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
        }
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);

      teamArray.push(manager);
      console.log(manager);
    });
};

// start of Employee prompts
const addEmployee = () => {
  console.log(`
  ----------------------------
  Adding employees to the Team
  ----------------------------
  `);
  return inquirer.prompt([
    {
      type: "list",
      name: "role",
      message: "Please choose your employee's role",
      choice: ["Engineer", "Intern"],
    },

    {
      type: "input",
      name: "name",
      message: "What is the name of the employee.\n",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the Employee's name.\n");
          return false;
        }
      }
    },

    {
      type: "input",
      name: "id",
      message: "Please enter the Employee's ID.\n",
      validate: (nameInput) => {
        if (isNaN(nameInput)) {
          console.log("Please enter the Employee's ID.\n");
          return false;
        } else {
          return true;
        }
      }
    },

    {
      type: "input",
      name: "email",
      message: "Please enter the Employee's email.\n",
      validate: (email) => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        if (valid) {
          return true;
        } else {
          console.log("Please enter an email!\n");
          return false;
        }
      }
    },

    {
      type: "input",
      name: "github",
      message: "Please enter the Employee's GitHun username.",
      when: (input) => input.role === "Engineer",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the Employee GitHub username");
          return false;
        }
      }
    },

    {
      type: "input",
      name: "school",
      message: "Please enter the Intern's school name.",
      when: (input) => input.role === "Intern",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the Intern's school name");
          return false;
        }
      }
    },
    {
      type: "confirm",
      name: "confirmAddEmployee",
      message: "Would you like to add more Team Members?",
      default: false
    }
  ])
  .then(employeeData => {
    // data for employee types
    let { name, id, email, role, github, school, confirmAddEmployee} = employeeData;
    let employee;

    if(role === "Engineer") {
      employee = new Engineer (name, id, email, github);
      console.log(employee);
    } 
    else if (role === "Intern") {
      employee = new Intern (name, id, email, school);
      console.log(employee);
    }

    teamArray.push(employee);

    if (confirmAddEmployee) {
      return addEmployee(teamArray);
    }
    else {
      return teamArray;
    }
  })
};

function to generate HTML page file using file system
const writeFile = data => {
  fs.writeFile('./dist/index.html', data, err => {
    // if there is an error
    if(err) {
      console.log(err);
      return;
    }else {
      console.log("Your team profile has been successfully created! Please open index.html file in your browser");
    }
  })
};

addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generatePage(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
  console.log(err);
  });