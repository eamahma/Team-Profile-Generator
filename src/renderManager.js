const path = require('path');
const fs = require('fs');

function renderManager(manager) {
const html =`
        <div class="col-md-4">
        <div class="card mb-4" style="width: 18rem;">
            <div class="card-header bg-primary text-white">
                <h2>${manager.getName()}</h2>
                <h3><i class="fas fa-mug-hot"></i>cc${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <p>Employee ID: ${manager.getId()}</p>
                <p>Employee email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                <p>Manager office: ${manager.getOfficeNumber()}</p>
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

module.exports = renderManager;