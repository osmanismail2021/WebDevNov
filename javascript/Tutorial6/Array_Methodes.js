/*
toString
join
pop
push
*/
var myBooks = ['book1', 'book2', 'book3', 'book4', 'book5']
var result;

// tostring
// result = myBooks.toString()

// // push method
// myBooks.push('book6') // insert new array item

// // pop method
// myBooks.pop() // delete last item

// // join method
// result = myBooks.join(" and ")

// myBooks.shift() // delete first array item 

// // slice method
// result = myBooks.slice(0,2)
// result = myBooks.slice(3, myBooks.length) // 3-5 range

// concat
// var n1 = [1, 2, 3, 4, 5, 6, 7]
// var n2 = [8,9]
// result = n1.concat([8, 9])


// var randomNumbers = [556,88,22,44,0,1,446,78,33,99,11]
//result = names.splice(2,1)

//result = names.sort()

// result = randomNumbers.sort(function(a,b){return a-b})

// forEach
// randomNumbers.forEach(function(num,index){
//     console.log(num,index)
//     console.log(num+5,"extra") // js .. you have only access here
// })


// some method
// var myArrayList = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// result = myArrayList.some(function (n) {
//     return n >=9 // true // false
// })

// var randomNumbers = [5,6,10,55,33,88,99]
// var userGuess=56

// var guess = randomNumbers.some(function(n){
//     return n===userGuess
// })

// guess ? console.log('you won'):console.log('try again')

// every method
let numbers = [77,77,77]
let _numbers = [66,55,77] // false

result = _numbers.every(function(value){
    return value === 66
})

// map array
result = numbers.map(function(val){
    return val
})

//filter method
result = _numbers.filter(function(val){
    return val >=66
})

var students = [
    {
        id:1,
        name:'jack',
        course:'javascript',
        score:45
    },
    {
        id:1,
        name:'mike',
        course:'java',
        score:55
    },
    {
        id:1,
        name:'george',
        course:'javascript',
        score:66
    },
    {
        id:1,
        name:'joe',
        course:'python',
        score:70
    }
]

var _students = [
    {
        id:1,
        name:'xxx',
        course:'javascript',
        score:45
    },
    {
        id:1,
        name:'mike',
        course:'java',
        score:55
    },
    {
        id:1,
        name:'george',
        course:'javascript',
        score:66
    },
    {
        id:1,
        name:'joe',
        course:'python',
        score:70
    }
]

// result = students.filter(function(x){
//     return x.course === 'javascript'
// })

// result = students.filter(function(x){
//     return x.name ==='jack'
// })

function findWhoPassedExam(param){
    // param = students
    // filter 
    let result = param.filter(function(value){
      return  value.score >=55 // if student score is greater than or equal to 50
    })
    return result // new array list created here
}

//console.log(findWhoPassedExam(_students))

// includes method
var mynumbers = [3,4,5,6,7,8,9,5,5,55,677,88,55,44]
//result = mynumbers.includes(7)
result=""

function isNumberExists(number){
    let result = mynumbers.includes(number)

    if(result){
        console.log('This number is in array!')
    }else{
        console.log('This number is not array!')
    }

}

isNumberExists(99)

// reverse method
result = mynumbers.reverse()

//result.length !=0 ? console.log(result):console.log('not found')
//console.log(result.length)
console.log(result);