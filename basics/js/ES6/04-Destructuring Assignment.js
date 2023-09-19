//es5
//1
var data = req.body;
var user = data.username;
var pwd = data.password;

//2
var list = [ 1, 2, 3 ];
var a = list[0], b = list[2];
var tmp = a; a = b; b = tmp;

//3
var tmp = getASTNode();
var op  = tmp.op;
var lhs = tmp.lhs;
var rhs = tmp.rhs;


//es6
//1
var {username, password} = req.body;

//2
var list = [ 1, 2, 3 ]
var [ a, , b ] = list
[ b, a ] = [ a, b ]

//3
var { op, lhs, rhs } = getASTNode()