const Manager = require('../lib/Manager');

test('creates a team member', () => {
    const manager = new Manager ('Dave Smith', 345821, 'davesmith@yahoo.com', "manager", 1);
  
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.name.length).toBeGreaterThan(0);
    expect(manager.id).toBeGreaterThan(0);
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.role).toEqual(expect.any(String));
    expect(manager.office).toBeGreaterThan(0);
    

  });