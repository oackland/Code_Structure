console.log('testing')

// additional control flow concept, switch statements
/* Syntax: 
switch(expression) {
    case a:
        code block
        break;
    case b:
        code block
        break;
    default:
        // code block
} 
*/
let num = 11
switch(num % 2 == 0){
  case true:
    console.log('even')
    break;
  default:
    console.log('odd')
}

// JS Objects (Python Dicts)
const person = {
  name: 'dylan',
  age: 999,
  location: 'USA'
}

// access data in objects (using bracket or dot notation)
console.log(person['age'])
console.log(person.age)

// Inclass Exercise #1 (Get the Value 'Manchester United')
const person2 = {
    name: "Max",
    age: 31,
    prog_languages: ["JavaScript", "Python", "C++", "Java"],
    fav_color: "Blue",
    teams: [
      {
        baseball: "Chicago White Sox",
        football: "Chicago Bears",
        hockey: "Chicago Blackhawks",
        basketball: ["Chicago Bulls", "Chicago Sky"],
        soccer: ["Chicago Fire", "Naperville Yellowjacks"],
      },
      {
        baseball: "Toronto Bluejays",
        football: "LA Rams",
        basketball: "Milwalkee Bucks",
        soccer: ["Manchester United", "Liverpool"],
      },
    ],
  };

// Solution Here:
console.log(person2.teams[1].soccer[0])

// JS Object methods ((Object.keys(object), Object.values(object))
console.log(Object.keys(person2))
console.log(Object.values(person2))

// looping an object using for in
// for in: iterates over keys in object or indices in an array
for(let key in person2){
  console.log(person2[key])
}



// ---------- Creating a JS Class ----------
class Team {
  constructor(city, name){
    this.city = city
    this.name = name
  }

  printInfo(){
    return `The ${this.name} are from ${this.city}!`
  }
}

// Creating an instance
const team1 = new Team('LA', 'Lakers')


// Inheriting from a class using 'extends'
class Player extends Team {
  constructor(city, name, playerName){
    super(city, name)
    this.playerName = playerName
  }

  printInfo2(){
    return `${this.playerName} plays for the ${this.city} ${this.name}!`
  }
}

const player1 = new Player('Chicago', 'Bulls', 'Michael Jordan')
console.log(player1.printInfo())
console.log(team1.printInfo())


// ---------- JS Closures ----------
let grandpa = 'grandpa'
function a(){
  let father = 'father'
  return function b(){
    let son = 'son'
    return `${grandpa} -> ${father} -> ${son}`
  }
}

console.log(a()())

// ---------- JS Promises ----------
/*
A promise is something that will take time to do.
There are two possible outcomes of a promise
-- Resolve/Fulfilled = Success
-- Reject = Error
*/

// returns a pending promise
// console.log(fetch('https://pokeapi.co/api/v2/pokemon/ditto'))

// 2 ways to handle promises
// first way using callbacks: .then(resolved) / .catch(reject)
// handle pending promise with .then(), .catch()
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then((response) => {
  console.log(response.status)
  return response.json()
})
.then((data) => {
  console.log(data)
})
.catch((error) => {
  console.error(error)
})

// viewing our data if promise resolved: 200 status code

// Second way: Using async/await (ES6)
const pokemonData = async () => {
  try{
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const data = await response.json()
    console.log(data)
  }
  catch (error) {
    console.error(`there was a problem: ${error}`)
  }
}

pokemonData()
console.log('testing')