// Intern properties name Id email getName() getID() getEmail() getRole() school getSchool() getRole() //Overridden to return 'Intern'
//adding validation to ensure that user input provided is in the proper expected format.

function Intern(name, id, email, role, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
    this.school = school;
      }
  
  module.exports = Intern;