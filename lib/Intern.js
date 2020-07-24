// Intern properties name Id email getName() getID() getEmail() getRole() school getSchool() getRole() //Overridden to return 'Intern'
//adding validation to ensure that user input provided is in the proper expected format.
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, role, school) {
    super();
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
    this.school = school;
      };
      getSchool() {
        return this.school;
    }

    getRole() {
        return this.role;
    }
  }
  module.exports = Intern;