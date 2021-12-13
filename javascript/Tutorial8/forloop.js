// for (let x=0; i<=5; x++ ){
//     console.log('hello',i)
// }


// function printEvenNumber(number){

// }

// function printEvenNumber(number){
//     for(let i=1; i<number;i++){
//         if(i % 2 === 0){
//             console.log(i)
//         }
//     }

// }

// printEvenNumber(10)


// for (let i = 10; i >= 0; i--) {
//     console.log('hello',i)
// }

let x, y
// for(x=1,y=50; x<=10 && y>=50;x++,y--){
//     console.log(`x:${x}\ny:${y}`)
// }

// for(x=1;x<=10;x++){
//     // 
//     for(y=1; y<=10;y++){
//         let result = `${x} + ${y} =  ${x+y}`
//         console.log(result)
//     }
// }

let arraylist = ['ali', 'veli', 'deli'];

//console.log(arraylist.length)
// for (let x = 0; x < arraylist.length; x++) {
//     console.log(x)
//     console.log(arraylist[x])
// }

let posts = [{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
},
{
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
},
{
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
}]

// for(let x=0; x<posts.length;x++){
//     let obj = posts[x]
//     console.log(obj.title)
// }

// let answer = 1;
// for(let x=4;x>=1;x--){
//     answer = answer * x // 24
//     // 1 * 4
//     // 4 * 3
//     // 12 * 2
//     // 24 * 1
//    // console.log(answer,'in for')
// }

// console.log(answer,'global scope')


// function getFactrial(n){
//     let answer = 1;
//     for(let x=n;x>=1;x--){
//         answer = answer * x
//         // 1 * 4
//         // 4 * 3
//         // 12 * 2
//         // 24 * 1
//        // console.log(answer,'in for')
//     }
//     console.log(answer)
// }

// getFactrial(4)

let count=0;
for(let i=0;i<100;i++){
    console.log(i)
    count = count + i // increasing 1 2 3 4 5 6
    // count =0  = 0 +  1 => 1
    // count = 1 = 1 + 2 = > 3
    
    //4950
    count = count -1 // decrease 100 at the end  4950 - 100 
    // 4850
}

console.log(count)