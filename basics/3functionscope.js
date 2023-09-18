// 1. Creation of Scope
// Scope [outer: (x, inner), inner: (x)]

// 2. Execution
// Scope [outer: (x:10, inner:fn), inner: (x:20)]

// var  x = 3;
var outer = function() {
    console.log("outer!");
    var x = 10;
    var inner = function() {
        console.log("inner!");
        console.log(x + 5);
        var x = 20;
    }  
    return inner;
}

// var result = outer();
// result();

outer()();