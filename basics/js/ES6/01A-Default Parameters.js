//es5
function f (x, y, z) {
    if (y === undefined)
        y = 0;
    if (z === undefined)
        z = 0;
    return x + y + z;
};
f(1) === 1;
f(1,2,3) === 6;


//es6
function f (x, y = 0, z = 0) {
    return x + y + z;
}
f(1) === 1;
f(1,2,3) === 6;
