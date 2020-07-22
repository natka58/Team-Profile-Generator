// Engineer properties name Id email getName() getID() getEmail() getRole() github //GitHub username getGitHub() getRole // Overridden to return 'Engineer'
const Engineer = require('../lib/Engineer');

test('creates a team member', () => {
    const engineer = new Engineer ('Dave Smith', 345821, 'davesmith@yahoo.com', "engineer", "GitHub");
  
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.name.length).toBeGreaterThan(0);
    expect(engineer.id).toBeGreaterThan(0);
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.role).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
    

  });