const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(id, name, email, gitHub) {
        super(id, name, email);
        this.gitHub = gitHub;
    }

    getGitHub() {
        console.log(`GitHub ID: ${this.gitHub}`);
        return this.gitHub;
    }
 
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;