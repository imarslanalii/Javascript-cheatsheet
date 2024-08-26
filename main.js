console.log("Hello World");
// console.error("This is error")

let score = 20
console.log(score) 

// string number boolen null 

// const name = "Arslan";
const num = 10;
const iscol = true;
const  x = null
const y = undefined
let z

// console.log (typeof name)

// string 

const name = "john";
const age = 20;

// concatinaion 

console.log('My name is ' + name + ' and i am ' + age); 

// templete string 

 const hello = `my name is ${name} and i am ${age}`
 console.log(hello)

 console.log(hello.length)

//  Arrays 

const number = new Array(1,2,4,5,6)
console.log(number)

const fruits = ['apple', 'orange', 'banana']

fruits.push('mangoes')

fruits.unshift('strawberies')

fruits.pop()

console.log(Array.isArray('hello'))

console.log (fruits.indexOf ('orange'))
 
console.log(fruits[3])

// more functions 

const todos = [
    {
        id: 1,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'in college',
        isCompleted: true
    },
    {
        id: 3,
        text: 'dentist app',
        isCompleted: false
    }
]
console.log(todos[1].text)

// JSON Format
// const todoJSON = JSON.stringify(todos)
// console.log(todoJSON)

// Loops 

for(let i = 0; i < 5; i++){
    console.log(i)
}

let i = 0
while(i < 10) {
    console.log (i);
    i++ ; 
}