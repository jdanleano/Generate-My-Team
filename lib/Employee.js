// This is the employee constructor
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // Returns name from input
    getName () {
        return this.name;
    }

    // Returns ID from input
    getId () {
        return this.id;
    }   

    // Returns email from input
    getEmail () {
        return this.email;
    }

    // Returns role from input
    getRole () {
        return 'Employee'; 
    }
};

// Module export to be used in a different file
module.exports = Employee; 