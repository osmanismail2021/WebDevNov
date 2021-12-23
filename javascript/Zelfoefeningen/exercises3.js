// var i = 0;

// while (i < 100){
//     console.log("i degeri : " + i);
//     i = i + 2;

// }
// var x = 2;

// while (x < 50){
//     console.log("x degeri : " + x)
//     x = x + 5;

// }


// var x = 2;

// while (x < 24){
//     console.log("x degeri : " + x)
//     x = x + 2;
// }

var username = "emine"
var password = "123456"
var rateLimit=3;

while(rateLimit>0){
    var askUsername = prompt("enter your username")
    var askPassword = prompt("Enter your password!")
    rateLimit--;
    if(askUsername == username && askPassword == password){
        console.log('Hosgeldin Emine!')
        break;
    }else{
        console.log(`You've ${rateLimit} attempts left.`)
    }
}

document.getElementById('result').innerHTML = username('emine')


