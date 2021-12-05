// /*
// if(condition){
//     // result
// }else{
//     // result
// }
// */

// var person = {
//     firstname:'Joe',
//     lastname:'Dalton',
//     age:29,
//     livingPlace:'Aalst',
//     isStudent:true,
//     email:'joe@joe.com'
// }

// if(person.age >=18 && person.livingPlace ==='Aalst1' && person.isStudent === true){
//     console.log(person) // return true
// }else if(person.lastname === 'Dalton'){
//     console.log('Lastname is correct',person)
// }else{
//     console.log('default > false... end here')
// }


// // var userInput = prompt('Please enter a number!');



// var a = 1 + Number("1") // 2

// // console.log(typeof Number(userInput))


// var x = 1
// var b = "intec"
// // console.log(isNaN(x)); // Not a number method
// if( isNaN(a) ){ // true
//     console.log('it is string')
// }else{
//     console.log('its a number')
// }


var numberInput = prompt('enter a number')

if(isNaN(numberInput)){
    console.log('it is not a number')
    numberInput = prompt('please try enter a number!')
    console.log(numberInput)
}



