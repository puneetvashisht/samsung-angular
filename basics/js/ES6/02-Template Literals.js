var customer = { name: "Foo" };
var card = { amount: 7, product: "Bar", unitprice: 42 };
var bar1 = 1;
var bar2 = 2;
var isAsync = true;

//es5
var message = "Hello " + customer.name + ",\nwant to buy " + card.amount + " " + card.product + " for\na total of " + (card.amount * card.unitprice) + " bucks?";

/*var resource = "http://example.com/foo?bar=%d&async=%s", bar1+bar2, isAsync;
console.log(resource);*/
console.log("http://example.com/foo?bar=%d&async=%s", (bar1+bar2), isAsync);


//es6
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`

var resource = `http://example.com/foo?bar=${bar1 + bar2}&async=${isAsync}`;
console.log(resource);