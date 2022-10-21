// importing Employee Constructor
const Employee = require("./Employee");

// engineer constructor extends emmployee constructor
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // calling employee constructor
    super(name, id, email);
    this.github = github;
  }
  // returning github from input
  getGithub() {
    return this.github;
  }
  // override employee role to engineer
  getRole() {
    return "Engineer";
  }
}

// module to be exported
module.exports = Engineer;
