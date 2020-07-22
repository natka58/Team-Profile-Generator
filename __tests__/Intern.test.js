// Intern properties name Id email getName() getID() getEmail() getRole() school getSchool() getRole() //Overridden to return 'Intern'
const Intern = require('../lib/Intern');

test('creates a team member', () => {
    const intern = new Intern ('Dave Smith', 345821, 'davesmith@yahoo.com', "intern", "School");
  
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.name.length).toBeGreaterThan(0);
    expect(intern.id).toBeGreaterThan(0);
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.role).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
    

  });