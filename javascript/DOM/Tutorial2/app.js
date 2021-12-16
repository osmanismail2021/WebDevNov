// //getElementId

let value;
let elGen = t => document.createElement(t)
let findAll = selector => document.querySelectorAll(selector)

// let value;
// value = document.getElementById('todo-form')

// //value.innerHTML="test"


// //getElementByTagName
// value = document.getElementsByTagName('input')//return html collection

// value = document.getElementsByTagName('*')
// // value.forEacht(el=>{
// //  console.log(el)
// // })

// value = Array.from(value)

// // function ForEachFnction (el){
// //    console.log(el)
// //     el.remove()
// // }
// // value.forEach(ForEachFnction)


// // console.log(value)

// //getElementByClassName
// value = document.getElementsByClassName('card-body')
// value = document.getElementsByClassName('*') // not Working

// //querySelector
// value = document.querySelector('.card-header') // return single element. It takes the first one.


// //querySelectorAll
// value = document.querySelectorAll('.card-header');

// value.forEach(el=>{
//     //console.log(el)
// })

// value = document.querySelectorAll('.card-header')

const [first,second,third] = document.querySelectorAll('.card-header')

//console.log(first,second,third)

//createElement()

value = document.createElement('p')
value.className="lead text-danger font-weight-bold"
value.innerHTML="This is test paragraph"
third.appendChild(value)

//custom function for createElement


value = elGen('div')
value = elGen('a')
value.href="google.com";
value.innerHTML="click google"

value = findAll('.delete-item')


value.forEach(btn=>{
    console.log(btn)
    btn.addEventListener('click',function(e){
        e.preventDefault();   //--> ekranin basa donmesini engelliyor
        //click actions
        console.log('hello click!!!')
    })
})

//value = findAll('div');
console.log(value)


