const [movie_name,director,cover_link] = document.querySelectorAll('input')
const addBtn = document.querySelector('#add-movie')
let movies = []
const tableBody = document.querySelector('#films')

function TestRemove(getEl){
 //   getEl.preventDefault();
    console.log(getEl.parentElement.parentElement)
 getEl.parentElement.parentElement.remove()
}



    addBtn.addEventListener('click', function (e) {
        e.preventDefault();
        console.log(movie_name,director,cover_link,addBtn)

        let obj ={
            cover:cover_link.value,
            movie_name:movie_name.value,
            director:director.value,
            
            
        }
        console.log(obj)
        movies.push(obj)
        console.log(movies)
        tableBody.innerHTML += `<tr>
        <td><img src=${obj.cover} class="img-fluid img-thumbnail"></td>
        <td>${obj.movie_name}</td>
        <td>${obj.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger" onClick="TestRemove(this)" >Delete Movie</a></td>
      </tr>`
    })

    document.querySelector('#clear-films').addEventListener('click',e=>{
        e.preventDefault();
        tableBody.innerHTML=""
    })


    //bunlari json a yukle