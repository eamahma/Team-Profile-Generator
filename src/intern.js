const Intern = require('./employee');

class Intern extends Employee{
    constructor(id, school) {
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

module.export = Intern;