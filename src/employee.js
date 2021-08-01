class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    getId() {
        console.log(`Employee ID: ${this.id}`);
        return this.id;
    }

    getName() {
    console.log(`Employee name: ${this.name}`);
    return this.name;
    }

    getEmail() {
        console.log(`Employee email: ${this.email}`);
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.export = Employee;