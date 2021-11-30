var webdevnov = 1
var webdevnov1 = 20
console.log(webdevnov)
console.log(webdevnov1)

var fatema = 'Fatema'
var fatema = 'Khan'
fatema = 29

var smartphone = 'samsung' // decleration of a variable
var smartphone = 'apple' // re-declerated with different value
smartphone = 'android' // update 

console.log(fatema)

// const - let 

// const variable 

const firstName = 'Jack'
// re decleration
// const firstName = 'Mike'
// SyntaxError: Identifier 'firstName' has already been declared

// update
// firstName  = 'Mike'
// TypeError: Assignment to constant variable.

// let variable

let companyName = 'IntecBrussel'

// re-deck
//let companyName = "Microsoft"
// SyntaxError: Identifier 'companyName' has already been declared

// update
companyName = 'Apple'
// let variables can be updated

/*
var variable
can be re-declaration, update
const variable
can not be re-declaration or update
let variable
can not be re-declaration but can be updated
*/



// console.log(companyName)

let myMessage;

myMessage = 'hello world'

console.log(myMessage)

// let 2432323CompanyName = 'Intec'  // incorrect usage
// let %companyName = 'hello'  // incorrect usage
//let company Name = 'hello world // incorrect usage
let _companyName = 'hello' // correct usage
let company_Name = 'hello'
let companyName_ = 'hello'
// let company-name = 'hello'  // incorrect usage
let company_1 = 'hello'
let company1 = 'hello'
// let company& = 'hello'  // incorrect usage

var number1 = 10;
var number2 = 2;
// "=" equal to
var result = number1 + number2
result = number1 - number2
var str1 = "Intec"
var str2 = "Brussel"
result = str1 + str2
result = str1 + number2 // string (text)


var _number1 = 9;
var _number2 = 2;
// multiplication operator "*"
result = _number1 * _number2;

// divison operator "/"

result = _number1 / _number2

// var mySalary = 22000000;
// var taxpercent = 43434;
// var result = nettosalary% // netto salary
// console.log(result)

//=  2500 - (verzekering + tax + tax tax)

var _message = 'hello message'
// console.log(_message)

// Increment operator "++"
_number1++

// Decrease operator "--"
_number1--
result = _number1--

let x = (10 * (3 + 4)) + (3 + 3);
// console.log(x)

var a = 10; // 10 = 10 + 10 = 
a = a + a // 20
a = a * 2 // 20 * 2= 40

// power 
result = Math.pow(9, 2);

console.log(result, "result")


console.log("a result", a)
// console.log(result)


// string (text)

var result;
result = "This is a string"; // string
result = 10 // number
result = true; // true or false
result = "String" + 4

var n1 = 5 // string
var n2 = 5 // number

var res = n1 + n2 // 5 + 5 = 10
console.log(res)

result = 200.5 // decimal

result = 4343434e5;

console.log(1==2);

// array
const myDB = ["Atoyan","Yuruk","Sameer","Fatema","An","Osman","Mahmoud","Khaled","Bart"]; // array-object
const db = ['1','2','3','4',true,5,_number1]
myDB[0]="Atoyan Romeo"

// object
const student = {
    name:'Romeo',
    lastname:'Atoyan',
    age:29,
    isStudent:true,
    scores:[70,80,90,100]
}

console.log(db)
console.log(myDB)
console.log('This is object', student)
console.log("RESULT=> ", typeof myDB)