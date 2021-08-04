const Employee = require('./Employee');

class Intern extends Employee{
    constructor(id, name, email, school) {
        super(id, name, email);
        this.school = school;
    }

    getSchool() {
        console.log(`Intern School: ${this.school}`);
        return this.school;
    }
 
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;