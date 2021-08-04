const path = require('path');
const fs = require('fs');

function renderIntern(data) {
    const html =`
          <div class="col-md-4">
            <div class="card md-4" style="width: 18rem;">
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
          </div>
      `;
      fs.appendFile(path.join(__dirname, './index.html'), html, function(err) {
        if (err) {
            console.log(err);
        }
      })
  }

  module.exports = renderIntern;