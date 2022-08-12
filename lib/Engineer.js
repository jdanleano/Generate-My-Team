// This imports the employee constructor 
const Employee = require("./Employee");

// This is the engineer constructor extending from the employee
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // This calls the employee constructor
        super (name, id, email);

        this.github = github; 
    }

    // This returns the github username
    getGithub () {
        return this.github;
    }

     // This will override the employee role to engineer
    getRole () {
        return "Engineer";
    }
}

// Module export to be used in a different file
module.exports = Engineer; 