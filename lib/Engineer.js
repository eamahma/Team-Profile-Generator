const Employee = require('./Employee');

// Class Engineer a subclass of Class Employee
class Engineer extends Employee{
    constructor(id, name, email, gitHub) {
        // Super create and Employee object
        super(id, name, email);
        this.gitHub = gitHub;
    }

    // Method to get engineer GitHub user
    getGitHub() {
        return this.gitHub;
    }

    // Method to get Engineer role
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;