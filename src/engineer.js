const Employee = require('./employee');

class Engineer extends Employee{
    constructor(id, gitHub) {
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

module.export = Engineer;