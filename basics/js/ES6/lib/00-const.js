//es5
var PiObject = new Object();
Object.defineProperty(typeof PiObject === "object" ? PiObject : window, "PI", {
  value: 3.141593,
  enumerable: true,
  writable: false,
  configurable: false
});
PiObject.PI = 5;
console.log(PiObject.PI); //es6

const PI = 3.141593;
console.log(PI);