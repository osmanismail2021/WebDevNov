// Math Object
var result;

result = Math.PI

// Round()
result = Math.round(5.6);
result = Math.round(2500.545)

// Power method()
result = Math.pow(3,2)
result = Math.pow(8,2)

// Square Method
result = Math.sqrt(64)

// Sin and Cos

result = Math.sin(90*Math.PI /180);
result = Math.cos(0*Math.PI /180)

// max()

result = Math.max(3,6,66,99,100,101,999)

// min()

result = Math.min(3,6,66,99,100,101,999)

// Random()
// 0-1
// 0-9
// 0-10
// 10-100
result = Math.random()
result = Math.round(Math.random()*10)

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }


let names = ['jack','mike','joe','michael']

// result = getRndInteger(1,100)
// let getRange = getRndInteger(0,3)
// console.log(getRange)
// result = names[getRange]
// let guessNumber=3
// guessNumber === getRange? console.log('correct'):console.log('incorrect')
result = Math.random()
let numberRandom =getRandom(0,3)
result = names[numberRandom]
console.log(result)