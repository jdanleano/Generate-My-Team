// using Manager constructor 
const Manager = require('../lib/Manager');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Joseph', 12345, 'joseph@email.com', 1234567890);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Joseph', 12345, 'joseph@email.com');

    expect(manager.getRole()).toEqual("Manager");
}); 