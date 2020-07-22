// Engineer properties name Id email getName() getID() getEmail() getRole() github //GitHub username getGitHub() getRole // Overridden to return 'Engineer'
//adding validation to ensure that user input provided is in the proper expected format.



function Engineer(name, id, email, role, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
    this.github = github;
      }
  
  module.exports = Engineer;