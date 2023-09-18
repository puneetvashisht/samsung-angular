console.log('hello world!');

var x = true;
console.log(typeof(x)); // number

var person = {name: 'John', age: 30};
console.log(person.age);
person.nationality = 'Indian';
console.log(person);

function add(x, y) {
    return x + y;
}
var sum = function(x, y) {
    return x + y;
}

console.log(sum('2', 3));