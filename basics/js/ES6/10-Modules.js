//es5

/*----- module.js (reusable utility)--------*/
module.exports = {
  port: 3000,
  host: 'localhost'
}
    
/*----- index.js--------*/
var service = require('module.js')
console.log(service.port) // 3000



//es6

/*----- module.js (reusable utility)--------*/
export var port = 3000
export var host = 'localhost';

/*----- index.js--------*/
import {port, host} from 'module'
console.log(port) // 3000

/*----- main.js--------*/
import * as service from 'module'
console.log(service.port) // 3000