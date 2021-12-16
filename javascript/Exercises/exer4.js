let elGen = t => document.createElement(t)

let contain = elGen("div")
let pictureSrc = elGen("img")
let imageSource = elGen("https://picsum.photos/200")
pictureSrc = imageSource



(contain).appendChild(pictureSrc)
document.getElementsByClassName(".container").appenChild(pictureSrc)
