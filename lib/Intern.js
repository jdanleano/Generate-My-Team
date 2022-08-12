// This imports the employee constructor 
const Employee = require('./Employee');

// This is the intern constructor extending from the employee
class Intern extends Employee  {
    constructor (name, id, email, school) {
        // This calls the employee constructor
        super (name, id, email); 

        this.school = school; 
    }

    // This returns the name of the school from the input
    getSchool () {
        return this.school;
    }

    // This will override the employee role to engineer
    getRole () {
        return "Intern";
    }
}

// Module export to be used in a different file
module.exports = Intern; 