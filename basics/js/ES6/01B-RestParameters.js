//es5
function f (x, y) {
    // a is array of arguments but first 2 arguments are sliced
    var a = Array.prototype.slice.call(arguments, 2);
    
    return (x + y) * a.length;
};
f(1, 2, "hello", true, 7) === 9;





//es6
function f (x, y, ...a) {
    return (x + y) * a.length
}
f(1, 2, "hello", true, 7) === 9


function add (...n){
    console.log(n)
    n.for
}
add(1,2);
add(1,2,4)