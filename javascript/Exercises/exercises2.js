var students = [
    {
    name: "John",
    score: 10
    },
    {
    name: "Alex",
    score: 8
    },
    {
    name: "Steve",
    score: 5
    },
    {
    name: "Marc",
    score: 3
    }
]

function findWhoPassedExam(param){
    let result = param.filter(function(value){
      return  value.score >=5 
    })
    return result
}

console.log(findWhoPassedExam(students))