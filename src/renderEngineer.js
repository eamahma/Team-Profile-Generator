const path = require('path');
const fs = require('fs');

function renderEngineer(data) {
    const html =`
        <div class="col-md-4">
          <div class="card md-4" style="width: 18rem;">
            <div class="card-header text-white">
              <h2>${data.getName()}</h2>
               <h3><i class="fas fa-glasses"></i>  ${data.getRole()}</h3>
            </div>
            <div class="card-body bg-light">
              <p class="border border-secondary bg-white p-1">ID: ${data.getId()}</p>
              <p class="border border-secondary bg-white p-1">Email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a></p>
              <p class="border border-secondary bg-white p-1">GitHub: <a href="https://github.com/${data.getGitHub()}" target="_blank">${data.getGitHub()}</a></p>
            </div>
          </div>
        </div>
      `;
      fs.appendFile(path.join(__dirname, '../dist/index.html'), html, function(err) {
        if (err) {
            console.log(err);
        }
      })
  }

  module.exports = renderEngineer;