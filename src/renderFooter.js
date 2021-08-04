const path = require('path');
const fs = require('fs');

function renderFooter(){
    const html = `
        </div>
        </div>
    </body>
    </html>`

    fs.appendFile(path.join(__dirname, './index.html'), html, function(err) {
        if (err) {
            console.log(err);
        }
    })
} 

module.exports = renderFooter;