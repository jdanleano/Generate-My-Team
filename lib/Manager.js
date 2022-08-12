// This imports the employee constructor 
const Employee = require('./Employee');

// This is the manager constructor extending from the employee
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // This calls the employee constructor
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    // This will override the employee role to engineer
    getRole () {
        return "Manager";
    }
}

// Module export to be used in a different file
module.exports = Manager; 