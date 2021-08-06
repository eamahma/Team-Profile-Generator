const Employee = require('./Employee');

// Class Intern a subclass of Class Employee
class Intern extends Employee{
    constructor(id, name, email, school) {
        super(id, name, email);
        this.school = school;
    }

    // Method to get Intern School
    getSchool() {
        return this.school;
    }
 
    // Method to get Intern role
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;