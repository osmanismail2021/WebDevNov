var result;
var date = new Date();
result = new Date()

// get year!
result = date.getFullYear()

// get current month
result = date.getMonth();


// toLocaleString
let options = {weekday:'long',year:'numeric',month:'long',day:'numeric'}
result = date.toLocaleString('nl-BE',options)

// seconds, minutes, hours

result = date.getSeconds();
result = date.getMinutes(); // 10:15
result = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

// setInterval(function(){
//     console.log('hello world!')
// },1000)


setInterval(getRealTime,1000)

function getRealTime(){
    var dateObj = new Date();
    let getTime = `${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`
    document.getElementById('time').innerHTML = getTime
    console.log(getTime)
}

getRealTime()

// console.log(result)