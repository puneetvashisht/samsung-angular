const fs = require('fs');

// asyncrhoronous
// file read using callbacks

// callback-hell

fs.readFile('../README.md', 'utf8', function(e, data){
    if (e) throw e;
    console.log('Content of file is ' + data);

    // asyncrhoronous
    fs.readFile('../async/test.js', 'utf8', function(e, data){
        if (e) throw e;
        console.log('Content of file is ' + data);

        // asyncrhoronous
        fs.readFile('../async/test.js', 'utf8', function(e, data){
            if (e) throw e;
            console.log('Content of file is ' + data);
        });
    });
});


