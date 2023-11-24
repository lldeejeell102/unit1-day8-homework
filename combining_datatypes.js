// Combining Datatypes
// Question 1
const crayonBox = {
    colors:['red', 'blue', 'brown', 'purple]']
}
console.log(crayonBox.colors[2])


// Question 2
const bottle = {
    cap: {
        material: 'metal',
        color: 'blue'
    }
}
console.log(bottle.cap.material)

// Question 3
const recipt = {
    bdaygift: {
        gift1: {
            name: 'car',
            make: 'Honda',
            model: 'Civic',
            year: '2020',
            price: 23000
        },
        gift2: {
            name: 'smartphone',
            make: 'Google',
            mode: 'Pixel 6',
            year: '2021',
            price: 899
        }
    }
}

console.log(recipt.bdaygift.gift1.name)

// Question 4
const apartmentBuilding = {
    floor1: {
        tenant1: {
            name: 'Dan',
            unitnumber: 101,
            rent: 700,
        },
        tenant2: {
            name: 'Dave',
            unitnumber: 102,
            rent: 600,
        },
    }
}

console.log(apartmentBuilding.floor1.tenant1.name)





// Combine objects, arrays, and functions more than one level deep
// Question 1
const knit = (item, size) => {
    return {
        item: item,
        size: size
    }
}

console.log(knit('scarf', '6ft'))

// Question 2
const crayonSelector = (color) => {
    return {
        crayonBox
    }
}
console.log(crayonSelector())

// Question 3
const powerButton = () => {
        const options = () => {
            console.log('select a song')
        }
        options()
}
powerButton()


// Model a Vending Machine
const vendingMachine = {
    snacks: ['chips', 'chocolate', 'soda'],
    vend: (num) => {
        console.log(vendingMachine.snacks[num])
    }

}
vendingMachine.vend(1)


// Callbacks

// add
const add = (num1, num2) => {
    const sum = num1 + num2;
    console.log(sum)
}
add(4,5)


// subtract
const subtract = (num1, num2) => {
    const sum = num1 - num2;
    console.log(sum)
}
subtract(4,3)


// multiply
const multiply = (num1, num2) => {
    const sum = num1 * num2;
    console.log(sum)
}
multiply(4,5)


// divide
const divide = (num1, num2) => {
    const sum = num1 / num2;
    console.log(sum)
}
divide(4,2)


// calculate
const calculate = (operate, num1, num2) => {
    return console.log(operate(num1, num2));
        
}
calculate(add, 4, 5)
calculate(subtract, 4, 3)
calculate(multiply, 4, 5)
calculate(divide, 4, 2)


// function definition placement
// const bar = () => {
//     console.log('bar here');
// }
// bar();

// const foo = () => {
//     console.log('foo here');
// }
// foo();


// error reading

// foo();
// const foo ()=>{
    //     console.log('hi');
    // }
    
    // there needs to be an equals sign before the (). Also the initialization of the function foo needs to be after the declaration
    
    
// Section 3 Array Methods with Callbacks
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
    

// Every
// 1. Determine if every number is greater than or equal to 0
nums.forEach((positive) => {
    if(positive >= 0){
        console.log(true)
    }else {
        console.log(false)
    }
})

// 2. Determine if every word shorter than 8 characters
panagram.forEach((shortTerm) => {
    if(shortTerm.length <= 8){
        console.log(true)
    }else {
        console.log(false)
    }
})


// Filter
// 1. filter the array for numbers less than 4
const shortNums = []
nums.forEach((smallNums) => {
    if(smallNums < 4){
        shortNums.push(smallNums)
    }
})
console.log(shortNums)

// 2. filter words that have an even length
const evenWords = []
panagram.forEach((evenWord) => {
    if(evenWord.length % 2 === 0){
        evenWords.push(evenWord)
    }
})
console.log(evenWords)


// Find
// 1. Find the first value divisible by 5
let dbf = nums.find((v => v % 5 === 0))
console.log(dbf)

// 2. find the first word that is longer than 5 characters
let ltf = panagram.find((v => panagram.length > 5))
console.log(ltf)


// Find Index
// 1. find the index of the first number that is divisible by 3
let dbt = nums.findIndex((v => v % 3 === 0))
console.log(dbt)

// 2. find the index of the first word that is less than 2 characters long
let ltt = panagram.findIndex((v => panagram.length < 2))
console.log(ltt)


// For Each
// 1. console.log each value of the nums array multiplied by 3
const numsTripled = []
nums.forEach((v) => {
    v = v * 3
    numsTripled.push(v)
})
console.log(numsTripled)

// 2. console.log each word with an exclamation point at the end of it
const panagramYell = []
panagram.forEach((v) => {
    v = v + "!"
    panagramYell.push(v)
})
console.log(panagramYell)


// Thought Questions
// 1. What happened to the original array?
    // In my function, I created a new array and pushed each modified value/word.
    // If I were to create a functio that doesn't push the new values into a new array, I would rewrite the values/words
// 2. Can you store the values from a forEach method in a new array?
    // Yes! I tend to reach for new arrays to hold modified values in case you need to refer back to the original values.


// Map
// 1. make a new array of each number multiplied by 100
let nums100 = nums.map(v => {
    return{
        nums100: v * 100
    }
})
console.log(nums100)
// 2. make a new array of all the words in all uppercase
let panagramUpper = panagram.map(v => {
    return{
        panagramUpper: v.toUpperCase()
    }
})
console.log(panagramUpper)


// Thought Questions
// 1. What happened to the original array?
    // The original array will stay the same since we created a new array.
// 2. Can you store the values from a map method in a new array?
    // yes you can store the values from a map method into a new array


// Some
// 1. Find out if some numbers are divisible by 7
let nums7 = nums.some(v => v % 7 === 0)
console.log(nums7)
// 2. Find out if some words have the letter a in them
let panagramA = panagram.some(v => v.includes('a'))
console.log(panagramA)