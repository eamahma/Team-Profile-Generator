const Employee = require('./employee');

class Manager extends Employee{
    constructor(id, officeNumber) {
        super(id, name, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        console.log(`office number: ${this.officeNumber}`);
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}


module.export = Manager;