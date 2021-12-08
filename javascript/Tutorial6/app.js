var names = ['jack','mike','george','khaled'];

var ulList = document.getElementById('namelist')

names.forEach(function(x,i){
    console.log(x,i) // access
    ulList.innerHTML += `<li>${x}</li>`
})