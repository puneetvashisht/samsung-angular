const fs = require('fs');

function read(e, data){
    if (e) throw e;
    console.log('Content of file is ' + data);
}

fs.readFile('../README.md', 'utf8', read);
