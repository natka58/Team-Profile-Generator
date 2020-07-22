// Manager properties name Id emailoffice number getName() getID() getEmail() getRole() officeNumber getRole() //Overridden to return 'Manager'
//adding validation to ensure that user input provided is in the proper expected 

function Manager(name, id, email, role, office) 

{
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
    this.office = office;
      }
  
  module.exports = Manager;