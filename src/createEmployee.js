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
      teamMembers.push(manager);
      // console.log(teamMembers);
      // console.log(manager.getName());
      renderManager(manager);
      getRoleQuestions();
    })
};

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
        teamMembers.push(engineer);
    //    console.log(teamMembers);
        renderEngineer(engineer);
        getRoleQuestions();
    })
};

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
        teamMembers.push(intern);
        // console.log(teamMembers);
        renderIntern(intern);
        getRoleQuestions();
    })
};

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
      switch (answers.role){
        case "Engineer":
          createEngineer();
          break;
        case "Intern":
          createIntern();
          break;
        default:
          renderFooter();
      }
    })
};

module.exports = createManager;