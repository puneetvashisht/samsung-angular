//es5
var evens = [1,3,5,7,9];
var twos = [];

odds  = evens.map(function (v) { return v + 1; });
// odds =  evens.map(v=> v + 1)


pairs = evens.map(function (v) { return { even: v, odd: v + 1 }; });
nums  = evens.map(function (v, i) { return v + i; });

nums.forEach(function (v) {
   if (v % 2 === 0)
       twos.push(v);
});

//  variant 1
var self = this;
this.nums.forEach(function (v) {
    if (v % 2 === 0)
        self.twos.push(v);
});

//  variant 2 (since ECMAScript 5.1 only)
this.nums.forEach(function (v) {
    if (v % 2 === 0)
        this.twos.push(v);
}.bind(this));



//es6
odds  = evens.map(v => v + 1)
pairs = evens.map(v => ({ even: v, odd: v + 1 }))
nums  = evens.map((v, i) => v + i)
nums.forEach(v => {
   if (v % 2 === 0)
       twos.push(v)
})

this.nums.forEach((v) => {
    if (v % 2 === 0)
        this.twos.push(v)
})

var persons = [
    {name: 'Ravi', age: 43},
    {name: 'Priya' ,age: 41},
    {name: 'Rahul', age: 23}
]

persons.filter( p => p.name.startsWith('R'))

persons.filter(function(p){
    return p.name.startsWith('R')
})