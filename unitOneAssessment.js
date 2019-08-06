let assert = require('assert')

// Question One:

// Write a function called isOdd that returns whether or not a number is odd.
// If something that is not a number is passed in, return false.



function isOdd(num){
 if  (num % 2 !== 0){
     return true

  }else{
    return false
  }
  return isOdd
}

//I am having trouble with NaN. Typeof NaN is a number so its hard to restrict it from the other numbers.
// Uncomment out the next line to test your solution
// runQ1Tests()


// Question Two:

// Write a function called numberOfDigits that returns how many digits are in a given number
//
function numberOfDigits(digit){
  let digitString = digit.toString()
  return digitString.length
}

// Uncomment out the next line to test your solution
runQ2Tests()

// Question Three:

// Write a function called disemvowel that removes all of the vowels from a string.
// Treat y as a consonant, not a vowel

function disemvowel(word) {
let vowel = 'a'
let vowel2 = 'e'
let vowel3= 'i'
let vowel4 = 'o'
let vowel5 = 'u'
let vowel6 = 'A'
let vowel7 = 'E'
let vowel8 = 'I'
let vowel9 = 'O'
let vowel10= 'U'
//
//
let string = ''
  for(let i = 0; i < word.length; i++){
    if (!word[i].includes(vowel) && !word[i].includes(vowel2) && !word[i].includes(vowel3) && !word[i].includes(vowel4) && !word[i].includes(vowel5) && !word[i].includes(vowel6)&& !word[i].includes(vowel7) && !word[i].includes(vowel8) && !word[i].includes(vowel9) && !word[i].includes(vowel10)){
      string += word[i]
    }
  }
  return string
}

// Uncomment out the next line to test your solution
runQ3Tests()

// Question Four:
// Write a function called secondSmallest that returns the second smallest number in an array


function secondSmallest(arr){
  let newArr = arr.sort((a,b) => (a-b))
  return arr[1]
}


// Uncomment out the next line to test your solution
runQ4Tests()

// Question Five:
// Write a function called getLocations that takes in an array of objects that look like the array below,
// and returns an array of the strings corresponding to the value of the location property
// The output should be in the same order as the input



// Sample input:
// [{location: "Algeria", population: 41}, {location: "Belize", population: 0.4}, {location: "China", population: 1386}, {location: "Denmark", population: 6}]

// Sample output:
// ["Algeria", "Belize", "China", "Denmark"]


function getLocations(arr){
  let locationArr=[]
  for (let i = 0; i < arr.length; i++){
    locationArr.push(arr[i].location)
  }
  return locationArr
}


// Uncomment out the next line to test your solution
runQ5Tests()


// Question Six:

// Write a function called onlyOddStrings that takes in an array of strings as input and returns an array that only includes strings with an odd number of characters
// Your function should use a higher-ordered function (e.g map, filter, reduce, every, sort) in its implementation

// Uncomment out the next line to test your solution


function onlyOddStrings(arr){
  let result = arr.filter((currentElem) =>{
    if(currentElem.length % 2 !== 0){
      return currentElem
    }
  })
  return result
}

runQ6Tests()


// Question Seven:

// a.
// Make a class called Day
// Give it two properties set by the constructor named temperature and weather
// Give it a method named getDescription that returns a string in the format described below

// Example
// let myDay = Day(80, "sunny")
// myDay.getDescription() // returns "It is 80 degrees and sunny"

// class Day{
//   constructor(temperature, weather){
//     this.temperature = temperature;
//     this.weather = weather;
//   }
//   getDescription(){
//   return  `It is ${this.temperature} and ${this.weather}`
// }
//
// getAllDayDescriptions(){
// let newArr= []
//   let result= getDescription.filter((currentElem) =>{
//     if (typeof getDescription === 'string')
//     newArr.push(currentElem[i])
//   })
// return result

// let newArr= []
// let result = temperture.filter((currentElem) => {
//   if(currentelem === this.temperture)
//   newArr.push(currentElem[i])
//   return `It is ${this.temperature} and ${this.weather}`
// })
// return result


// }
//
// }
// I'm not sure how to incorporate a higher-ordered function to getAllDayDescriptions.
//I keep getting getAllDayDescriptions is not defined. I ended up confusing myself.

//b.
// Make a function called getAllDayDescriptions that takes in an array of Day objects and returns an array of their descriptions.  Use a higher-ordered function (e.g map, filter, reduce, every, sort) in your implementation.
// The output should be in the same order as the input

// Uncomment out the next line to test your solution
// runQ7Tests()



// The code below is used to test your solutions.  Feel free to look over it, but do not change any of it.

function TestCase(input, output) {
  this.input = input
  this.output = output
  this.formattedInput = () => {
    return JSON.stringify(this.input)
  }
}

function runTests(questionNum, testCases, testCallback) {
  console.log(`Question ${questionNum} Tests`)
  try {
    for (let testCase of testCases) {
      console.log(`Running ${testCallback.name}(${testCase.formattedInput()})`)
      assert.strictEqual(JSON.stringify(testCallback(testCase.input)), JSON.stringify(testCase.output))
    }
    console.log(`All Question ${questionNum} tests passed!\n`)
  }
  catch(error) {
    if (error.expected === undefined) {
      console.log("An unexpected error occurred running the test")
      console.log(error)
    } else {
      console.log(`\nTest failed.  Was expecting "${error.expected}", but got "${error.actual}"`)
    }
  }
}

function runQ1Tests() {
  let testCases = [
    new TestCase(1,true),
    new TestCase(3, true),
    new TestCase(5, true),
    new TestCase(7, true),
    new TestCase("3", true),
    new TestCase(0, false),
    new TestCase(2, false),
    new TestCase(4, false),
    new TestCase(10, false),
    new TestCase(NaN, false),
    new TestCase("hi", false)
  ]
  runTests("One", testCases, isOdd)
}

function runQ2Tests() {
    let testCases = [
      new TestCase(4,1),
      new TestCase(14,2),
      new TestCase(8473,4),
      new TestCase(73746, 5)
    ]
    runTests("Two", testCases, numberOfDigits)
}

function runQ3Tests() {
  let testCases = [
    new TestCase("hello", "hll"),
    new TestCase("What's up?", "Wht's p?"),
    new TestCase("aeaeae", ""),
    new TestCase("y doesn't count", "y dsn't cnt"),
    new TestCase("CAPITAL LETTERS DO COUNT", "CPTL LTTRS D CNT"),
  ]
  runTests("Three", testCases, disemvowel)
}

function runQ4Tests() {
  let testCases = [
    new TestCase([5,1,4,2,5,6], 2),
    new TestCase([1,10,7,90,5,4], 4),
    new TestCase([2,1,4,90,5,6], 2),
    new TestCase([1,3,4,90,5,6], 3)
  ]
  runTests("Four", testCases, secondSmallest)
}

function runQ5Tests() {
  let testCases = [
    new TestCase(
      [
        {location: "Algeria", population: 41},
        {location: "Belize", population: 0.4},
        {location: "China", population: 1386},
        {location: "Denmark", population: 6}
      ],
      ["Algeria", "Belize", "China", "Denmark"]
    ),
    new TestCase([{location: "England", population: 56}], ["England"]),
    new TestCase([], [])
  ]
  runTests("Five", testCases, getLocations)
}

function runQ6Tests() {
  let testCases = [
    new TestCase(
      ["a", "bb", "ccc", "dddd", "eeeee"],
      ["a", "ccc", "eeeee"]
    ),
    new TestCase(
      ["Four", "score", "and", "seven", "years", "ago"],
      ["score", "and", "seven", "years", "ago"]
    ),
    new TestCase(
      ["The", "only", "thing", "we", "have", "to", "fear", "is", "fear", "itself"],
      ["The", "thing"],
    ),
    new TestCase(
      ["one", "two", "three", "four"],
      ["one", "two", "three"]
    ),
    new TestCase([],[]),
    new TestCase(["a"],["a"]),
    new TestCase(["to"],[])
  ]
  runTests("Six", testCases, onlyOddStrings)
}

function runQ7Tests() {
  let testCases = [
    new TestCase(
      [
        new Day(50, "raining"),
        new Day(99, "sunny"),
        new Day(24, "snowing")
      ],
      [
        "It is 50 degrees and raining",
        "It is 99 degrees and sunny",
        "It is 24 degrees and snowing",
      ]
    ),
    new TestCase(
      [
        new Day(31, "sleeting"),
        new Day(88, "partly cloudy")
      ],
      [
        "It is 31 degrees and sleeting",
        "It is 88 degrees and partly cloudy",
      ]
    ),
    new TestCase([], [])
  ]
  runTests("Seven", testCases, getAllDayDescriptions)
}
