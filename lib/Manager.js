// Manager properties name Id emailoffice number getName() getID() getEmail() getRole() officeNumber getRole() //Overridden to return 'Manager'
//adding validation to ensure that user input provided is in the proper expected 
const Employee = require("./Employee");
class Manager extends Employee {
  constructor(name, id, email, role, office) 
  {
    super ();
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
    this.office = office;
      };
    getRole() {
      return this.role;
    }

    getOfficeNumber(){
      return this.office;
     }
    }
  
  module.exports = Manager;