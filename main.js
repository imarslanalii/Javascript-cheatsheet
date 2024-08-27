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

// let i = 0
// while(i < 10) {
//     console.log (i);
//     i++ ; 
// }

// conditionals 
// const a = 10

// if (a == 10) {
//     console.log('a is 10')
// } else if (a > 30){
//     console.log('a is greater than 10')
// } else {
//     console.log('a is less than 10')
// }

// const a = 11;
// const color = a > 10 ? 'red' : 'biue'

// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'biue':
//         console.log('color is blue')
//         break
//     default:
//         console.log('color is not red or blue')

// }

// function 

// function addnum(num1 = 1, num2 = 1) {
//     return(num1 + num2)
// }
// console.log(addnum(4, 5))

// destructor function 

// function prson (firstName, lastName, dob) {
//     this.firstName = firstName
//     this.lastNamae = lastName
//     this.dob = new Date(dob)
//     this.getBirthYear = function() {
//         return this.dob.getFullYear()
//     }
//     this.getFullName = function (){
//         return `${this.firstName} ${this.lastNamae}`
//     }
// }


//  class 
class prson {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName
        this.lastNamae = lastName
        this.dob = new Date(dob)
    }

    getBirthYear = function() {
        return this.dob.getFullYear()
     }

     getFullName = function (){
        return `${this.firstName} ${this.lastNamae}`
     }
}

// Object

const prson1 = new prson ('john', 'Doe', '6.21.2002')

console.log (prson1)