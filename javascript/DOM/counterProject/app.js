const btns = document.querySelectorAll('.btn')
const counter = document.querySelector(".display-3")
const increaseBtn = document.querySelector(".btn-primary")
const decreaseBtn= document.querySelector(".btn-danger")
const resetBtn = document.querySelector(".btn-warning")


let counterValue = 0;

increaseBtn.addEventListener("click", function (event){
    counterValue += 1;
    counter.innerHTML = counterValue;
});
decreaseBtn.addEventListener("click", function (event){
    counterValue -= 1;
    counter.innerHTML = counterValue;
});
resetBtn.addEventListener("click", function (event){
    counterValue = 0;
    counter.innerHTML = counterValue;
});


// btns.forEach((btn) => {
//     btn.addEventListener('click', (e) =>{
//         const styles = e.currentTarget.classList

//         if (styles.contains('increaseBtn')) {
//             counterValue++
//         } else if (styles.contains('decreaseBtn')) {
//             counterValue--
//         }else{
//             counterValue = 0
//         }
        
//         if(counterValue > 0){
//             counter.style.color = 'red'
//         }
//         if(counterValue < 0){
//             counter.style.color = 'blue'
//         }
//         if(counterValue = 0){
//             counter.style.color = 'yellow'
//         }
//         counter.textContent = counterValue
//     })
// })