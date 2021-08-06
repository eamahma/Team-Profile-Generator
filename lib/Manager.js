const Employee = require('./Employee');

// Class Manager a subclass of Class Employee
class Manager extends Employee{
    constructor(id, name, email, officeNumber) {
        super(id, name, email);
        this.officeNumber = officeNumber;
    }

    // Method to get manager office number
    getOfficeNumber() {
        return this.officeNumber;
    }

    // Method to get Intern role
    getRole() {
        return 'Manager';
    }

}


module.exports=Manager;