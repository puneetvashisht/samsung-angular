
// use promises to avoid callback-hell

// import { readFile } from 'node:fs/promises';
const fs = require('node:fs/promises');


fs.readFile('../README.md', { encoding: 'utf8' })
    .then(function (data) {
        console.log('Content' + data);
        return fs.readFile('../async/test.js', { encoding: 'utf8' });
    })
    .then(function (Content) {
        console.log('Content' + Content);

    })



