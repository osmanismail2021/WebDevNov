// Comparisson operators
var results;
//https://www.thomas-krenn.com/en/wiki/Cmd_commands_under_Windows
//equal to operator"==node"
result = 1 == 1 //true
result = 1 == "1"
result = 1 == "2"
result = "intec" == "intec" //true
result = "Intec" == "intec" //False
result = true == true //true
result = false == false //false
result = false == true //false
result = [] == [] //false
result = [1] == [1] //false
result = {} == {}
result = null == null
result = undefined == undefined //true
result = undefined == null //true

//equal value and equal data type "==="

result = 1 === 1 //true
result = 1 === "1" // false
result = undefined === undefined // true
result = undefined === null // false
result = [] === [] //false
result = "intec" === "intec"//true
result = "INTEC" === "Intec" //false
result = true === true //true
result = false === false // true
result = false === true // false


//not equal to => "!="

result = 1 != 1; //false
result = 1 != 2; //true
result = 1 != "1" //false
result = 1 !== "1" //true
result = "intec" != "Intec" //true
result = [] != []; //true
result = [1] != [1]; //true
result = {} != {} // true
result = function(){} != function(){} // true

var myFunc = ()=> console.log('hello') // arrow function
var myFunc1 = function(){console.log ('hello') } //function

var a = 10
var b = "10"






//greater than operator ">"

result = 5 > 6 // false
result = 0 > 0 //false
result = -10 > 10 //false
result = 

//ar studentAge=29
//if(studentAge > 29){
//    console.log('ok')
//}

//less than operator
result = 6<3 //false
result = 2.5<3 //true
//true = 1 false = 0
result = false < true //true


//greater than or equal to operator

result = 5>=6 // false
result = 6>=6 //true
result = 6>="6"//true
result = true>=false //true
result = undefined >= null//false


//less than or equal to operator "<="

result = 10 <=9 // false
result = 9 <=10 //true
result = 9 <= "9" // true
result = null <= null // true

var myArr = [1,2,3,4,5] //myArr.length = 5
var myArr1 = [1,2,3,4,5,6] // myArr.lenght = 6

result = myArr.length <= myArr1.length //true

result = myArr.length



//Logical Operator

//and operator "&&"

result = 11>10 && 9<8 //false
result = 10<9 && 1==1 // false
result = 1==1 && 10>9 //true
result = "" == "" && null == null; //true
result = "" == "" && null === null; //false

//OR operator "||"

result = 1===1 || 10>100 //true
result = 1!=10 || 1>10 //true
result = 1>10 || 10>100 // true

//NOT operator "!"

result = !(1==1) // false
result = !(1>10) // true
result = !((true == true) === (false==false))//false

//ternary operator
result = 1==1 ? 'yes' : 'no';
result = 10<1 ? 'INTEC':'condition is false'
result = "computer" === "computer" ? 'yes its true' : 'No its not'
result = "computer" === "laptop" ? 'yes its true' : 'No its not'
result = 1 === 2 ? (2===3? 'yes' : 'no'):'false'

/*
his age is under 18

true = he can drink 
false = he can't drink

*/
//  var myage = 30
//  result = myage >=18? 'he can drink' : 'he cant drink'
//  console.log(result)


 var student = {
     name:'Jack',
     age:17
 }
console.log(student.name)
result = student.name != undefined ? (student.age >=18? 'He is allowed to drink alcohol' : 'he is not allowed to drink alcohol'):'Student name is not exist';


// if else condition
if(myStudents[0].age >=18 && myStudent[0].age <=30){
    //18-30
    console.log('Young man!')
}


console.log(result)
