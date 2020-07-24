// Engineer properties name Id email getName() getID() getEmail() getRole() github //GitHub username getGitHub() getRole // Overridden to return 'Engineer'
//adding validation to ensure that user input provided is in the proper expected format.
const Employee = require("./Employee");


class Engineer extends Employee {
constructor(name, id, email, role, github) {
  super();
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
    this.github = github;
      };
      getGitHub() {
        return this.github;
      }

      getRole() {
        return this.role;
      }
      }

  
  module.exports = Engineer;