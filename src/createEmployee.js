const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const inquirer = require('inquirer');

const renderManager = require ('./renderManager');
const renderEngineer = require('./renderEngineer');
const renderIntern = require('./renderIntern');
const renderFooter = require('./renderFooter');

const teamMembers = [];

const createManager = function(){
    inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Manager name: ",
      },
      {
        type: "input",
        name: "id",
        message: "Manager ID: ",
      },
      {
        type: "input",
        name: "email",
        message: "Manager email: ",
      },
      {
        type: "input",
        name: "room",
        message: "Manager Room: ",
      },  
    ])
    .then(answers => {
      const manager = new Manager(answers.id, answers.name, answers.email, answers.room);
      // Push new Employee object into array
      teamMembers.push(manager);
      // render Manager card in html file
      renderManager(manager);
      // function to check if adding another employee
      getRoleQuestions();
    })
};

// Create new Engineer object and get user inputs for new object
const createEngineer = function(){
    inquirer.prompt([
        {
        type: "input",
        name: "name",
        message: "Engineer name: ",
        },
        {
        type: "input",
        name: "id",
        message: "Engineer ID: ",
        },
        {
        type: "input",
        name: "email",
        message: "Engineer email: ",
        },
        {
        type: "input",
        name: "github",
        message: "Engineer GitHub: ",
        },  
    ])
    .then(answers => {
        const engineer = new Engineer(answers.id, answers.name, answers.email, answers.github);
        // Push new Employee object into array
        teamMembers.push(engineer);
        // render Engineer card in html file
        renderEngineer(engineer);
        // function to check if adding another employee
        getRoleQuestions();
    })
};

// Create new Intern object and get user inputs for new object
const createIntern = function(){
    inquirer.prompt([
        {
        type: "input",
        name: "name",
        message: "Intern name: ",
        },
        {
        type: "input",
        name: "id",
        message: "Intern ID: ",
        },
        {
        type: "input",
        name: "email",
        message: "Intern email: ",
        },
        {
        type: "input",
        name: "school",
        message: "Intern school: ",
        },  
    ])
    .then(answers => {
        const intern = new Intern(answers.id, answers.name, answers.email, answers.school);
        // Push new Intern object into array
        teamMembers.push(intern);
        // render Intern card in html file
        renderIntern(intern);
        // function to check if adding another employee
        getRoleQuestions();
    })
};

// Function to give selection to add Engineer, Intern, or end the application
const getRoleQuestions = function (){
    inquirer.prompt([
      {
        type: 'list',
        name: 'role',
        message: 'Employee role:',
        choices: ['Engineer', 'Intern', 'Done'],
      }    
    ])
    .then(answers => {
      // Based on above selection different functions run
      switch (answers.role){
        case "Engineer":
          createEngineer();
          break;
        case "Intern":
          createIntern();
          break;
        default:
          // if no more employee added thic function render bottom of html file
          renderFooter();
      }
    })
};

module.exports = createManager;