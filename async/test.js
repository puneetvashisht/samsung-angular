const { log } = require("console");

console.log('starting...');

//syncrhoronous
// function foo() {
//     console.log('foo!');
//     return "success";
// }

//Asyncrhoronous using callback
// function foo(fn) {
//     setTimeout(function() {
//         console.log('foo!');
//     // return "success";
//     fn("success");
//     }, 2000);
    
// }

// asyncrhoronous using promise
function foo() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('foo!');
            resolve("success");
            // reject("error");
        }, 2000);
    });
}

foo()
.then(function(result) {
    console.log(result);
    if(result=="success") {
        return true;
    }
})
.then(function(data) {    
    console.log(data);
})

.catch(function(error) {
    console.log(error);
});

// foo(function(result) {
//     console.log(result);
// });

// // synchrornous invocation
// var result = foo();
// console.log(result);

console.log('ending...');