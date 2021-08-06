
// Parent Class of employee shared with 
// Manager, Engineer, Intern subclasses 
class Employee {
    // Class constructor
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    // Method the get employee id
    getId() {
        return this.id;
    }

    // Method the get employee name
    getName() {
        return this.name;
    }

    // Method the get employee email
    getEmail() {
        return this.email;
    }

    // Method the get employee Role
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;