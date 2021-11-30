var person = {
    firstname: 'Joe',
    lastname: 'Dalton',
    age:29,
    livingplace:'Aalst',
    isStudent:true,
    email: 'joe@joe.com'
}

if(person.age >=18 && person.livingPlace === 'Aalst' && person.isStudent === true){
    console.log(person) //return true
}else if(person.lastname === 'Dalton'){
    console.log('Lastname is correct',person)
}else{
    console.log('default > false... end here')
}



even = number % 2 == 0

