const Employee = require('../lib/Employee');

test('creates a team member', () => {
    const employee = new Employee('Dave Smith', 345821, 'davesmith@yahoo.com', "employee");
  
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.name.length).toBeGreaterThan(0);
    expect(employee.id).toBeGreaterThan(0);
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
    

  });