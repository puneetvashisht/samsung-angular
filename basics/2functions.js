

function bar(fn){
    fn();
    console.log("bar!");
    var inner = function(){
        console.log("inner!");
    }
    return inner;
}

function foo(){
    console.log("foo!");
}

var result = bar(foo);
result();