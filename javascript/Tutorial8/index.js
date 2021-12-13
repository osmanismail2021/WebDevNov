var label1 = document.getElementById('username')
var label2 = document.getElementById('password')
var submit = document.getElementById('enter')
submit.onclick = enter;

function enter(){
    if(label1.value == 'osman' && label2.value == '123' || label1.value == 'ahmet' && label2.value == 000 ){
        console.log('ingelogd')
}else{
    console.log('your username or paswoord is wrong');
    }
}