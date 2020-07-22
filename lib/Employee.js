// Employee Properties: name Id email getName() getID() getEmail() getRole() //REturns "Employee"
//adding validation to ensure that user input provided is in the proper expected format.


function Employee(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
      }
  
  module.exports = Employee;