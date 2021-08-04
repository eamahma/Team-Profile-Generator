const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const path = require('path');
const fs = require('fs');

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




const getRoleQuestions = () => {
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

function renderManager(manager) {
  const html =`
    <div class="card mb-4" style="width: 18rem;">
      <div class="card-body">
        <div class="card-header">
          <h2>${manager.getName()}</h2>
          <h3>${manager.getRole()}</h3>
        </div>
        <p>Employee ID: ${manager.getId()}</p>
        <p>Employee email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
        <p>Manager office: ${manager.getOfficeNumber()}</p>
      </div>
    </div>
    `;
    fs.appendFile(path.join(__dirname, './src/index.html'), html, function(err) {
      if (err) {
          console.log(err);
      }
    })
}

function renderEngineer(data) {
  const html =`
    <div class="card mb-4" style="width: 18rem;">
      <div class="card-body">
        <div class="card-header">
          <h2>${data.getName()}</h2>
          <h3>${data.getRole()}</h3>
        </div>
        <p>Employee ID: ${data.getId()}</p>
        <p>Employee email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a></p>
        <p>Engineer GitHub: ${data.getGitHub()}</p>
      </div>
    </div>
    `;
    fs.appendFile(path.join(__dirname, './src/index.html'), html, function(err) {
      if (err) {
          console.log(err);
      }
    })
}

function renderIntern(data) {
  const html =`
    <div class="card mb-4" style="width: 18rem;">
      <div class="card-body">
        <div class="card-header">
          <h2>${data.getName()}</h2>
          <h3>${data.getRole()}</h3>
        </div>
        <p>Employee ID: ${data.getId()}</p>
        <p>Employee email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a></p>
        <p>Intern School: ${data.getSchool()}</p>
      </div>
    </div>
    `;
    fs.appendFile(path.join(__dirname, './src/index.html'), html, function(err) {
      if (err) {
          console.log(err);
      }
    })
}


function renderHeader(){
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
      integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
    <title>Team</title>
  </head>
  <body>
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">MyTeam</a>
    </nav>
    <div class="container">
      <div class="card-deck">`


  fs.writeFile(path.join(__dirname, './src/index.html'), html, function(err) {
    if (err) {
        console.log(err);
    }
  })
} 

function renderFooter(){
  const html = `
      </div>
    </div>
  </body>
  </html>`

  fs.appendFile(path.join(__dirname, './src/index.html'), html, function(err) {
    if (err) {
        console.log(err);
    }
  })
} 


renderHeader();
createManager();
