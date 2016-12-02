// @flow


var str = 'hello world!';
console.log(str);

var sTemp = "test string";
console.log(typeof sTemp);
console.log(typeof 86);
console.log(typeof n);
// console.log(n == undefined); // error

function testFunc() {
}
console.log(testFunc() == undefined);


console.log(parseInt("5"))
console.log(parseInt("a5"))
console.log(parseInt("0x5a"))

function sayHi(sName, sMessage) {
  console.log("Hello " + sName + ":" + sMessage);
}
sayHi("suli", "first function test")


function howManyArgs() {
  console.log(arguments.length);
}
howManyArgs(1, 2, 3)
howManyArgs(1)
howManyArgs()

var doAdd = new Function("iNum", "console.log(iNum + 20)")
doAdd = new Function("iNum", "console.log(iNum + 10)")
doAdd(10)

{
    let _a = 1;
    var b = 1;
}
console.log("_a=" + _a)
console.log("b=" + b)


