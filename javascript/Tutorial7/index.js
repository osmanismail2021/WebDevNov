let nestedarray = [1,2,3,4,5,[6,7],[8,9,10]]
console.log(nestedarray[6][1])

let nestedComplex = [1,2,3,[4,5,6,[7,8,9]]]
console.log(nestedComplex[3][3][1])

let students = [
    {
        name:'sdadasd',
        address:'asdadas'
    },
    {
        name:'sdadasd66',
        address:'asdadas'
    },
    {
        name:'sdadasd44',
        address:'asdadas'
    }
]

console.log(students[2].name)

students.forEach(student=>{
    console.log(student.name)
})