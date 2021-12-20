let elGen = t => document.createElement(t)

let contain = elGen("div")
contain.className = "container"
contain.innerHTML = "selam"



let pictureSrc = elGen("img")
pictureSrc.src = "https://picsum.photos/200"
pictureSrc.className="img-responsive"

contain.appendChild(pictureSrc)
let bchild = document.getElementsByTagName("body")[0]
bchild.appendChild(contain)
//console.log(bchild)

