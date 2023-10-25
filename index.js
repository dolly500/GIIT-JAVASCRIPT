// Classwork

// write a javascript function to check whether an 
// input is a string or not

// write a javascript function to check whether 
// a string is blank or not

is_string = function(input) {
    if (Object.prototype.toString.call(input) === '[object String]')
    return true;
    else
    return false;
};

console.log(is_string('Stanley'));
console.log(is_string([1,2,3,4,5]));


// Correction

is_Blank = function(input){
    if (input.length === 0)
    return true;
    else
    return false;
}

console.log(is_Blank(''))
console.log(is_Blank('Dolapo'))




function myFunc(a, b){
    return a * b;
}

let result = myFunc(2,3)
console.log(result)


function myFunc(a, b){
    return a + b;
}

let result_1 = myFunc(2,3)
console.log(result_1)


const cars = [
    {
        name: 'Fiat',
        model: 500,
        weight: '850kg',
        color: 'white',
    },
    {
        name: 'Mercedez Benz',
        model: 700,
        weight: '300kg',
        color: 'gray',
    },
    {
        name: 'Mercedez Benz',
        model: 700,
        weight: '300kg',
        color: 'gray',
    },
    {
        name: 'Mercedez Benz',
        model: 700,
        weight: '300kg',
        color: 'gray',
    }
];

console.log(cars);


const cars_1 = 
    {
        name: 'Fiat',
        model: 500,
        weight: '850kg',
        color: 'white',
    }

console.log(cars_1.name)
console.log(cars_1.model)
console.log(cars_1.weight)
console.log(cars_1.color)


// Classwork

// Write a JavaScript function to find difference between two arrays

// using a test data: ([1, 2 3], [100, 2, 1, 10]); ["3", "10", "100"]


// Correction

function difbtwtwoarrays(arr1,arr2){
    var temp = [];
    arr1 = arr1.toString().split('').map(Number);
    arr2 = arr2.toString().split('').map(Number);

    for (var i in arr1){
        if (arr2.indexOf(arr1[i]) === -1)
        temp.push(arr1[i]);
    }

    for (i in arr2){
        if (arr1.indexOf(arr2[i]) === -1)
        temp.push(arr2[i]);
    }
    return temp.sort((a, b) => a - b);
}

console.log(difbtwtwoarrays([1,2,3], [100,2,1,10]));
console.log(difbtwtwoarrays([1,2,3], ["3", "10", "100"]));

var library = [
    { 
        author: 'Bill Gates',
        title: 'The Road Ahead', 
        libraryID: 1234,
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson', 
        libraryID: 4264,
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of Hunger Games', 
        libraryID: 3245,
    },
]

for (var i = 0; i < library.length; i++){
    var person = library[i];
    var author = person.author;
    console.log(author);
}

for (var i = 0; i < library.length; i++){
    var person = library[i];
    var title = person.title;
    console.log(title);
}
 


function sortArray(x,y) {
    if (x.title < y.title)
        return -1;
    if (x.title > y.title)
    return 1;
return 0;
}

console.log(library.sort(sortArray));

const list = {
        author: 'Bill Gates',
        title: 'The Road Ahead', 
        libraryID: 1234,
}

console.log(list.author);
console.log(list.title);
console.log(list.libraryID)


const carss = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < carss.length; i++) {
  text += carss[i] + "<br>";
}
console.log(text);

let text_1 = "";

for (let i = 0; i < 15; i++) {
  text_1 += i;
}

console.log(text_1)

let language = "JavaScript";

let text_2 = "";
for (let x of language) {
text_2 += x;
}

console.log(text_2);

a = 1;
b = -2;
c = 100;
d = 0;
f = -1;

if (a>b && a>c && a>d && a>f){
    console.log(a);
}
else if (b>a && b>c && b>d && b>f){
    console.log(b);
}
else if (c>a && c>b && c>d && c>f){
    console.log(c);
}
else if (d>a && d>b && d>c && d>f){
    console.log(d);
}
else if (f>a && f>b && f>c && f>d){
    console.log(f);
}

function happy_number(num){
    var m, n;
    var c = [];

    while(num != 1 && c[num] != true){
        c[num] = true;
        m = 0;
        while (num > 0){
            n = num % 10;
            m += n*n;
            num = (num - n)/10;
        }
        num = m;
    }
    return (num == 1);
}

var cnt = 5;
var num = 1;
var f5 = '';
while (cnt-->0){
    while(!happy_number(num))
    num++;
    f5 = f5 + (num + ",");
    num++;
}

console.log(f5);

// Correction 

var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var averageMark = 0
for (var i= 0; i<students.length; i++){
    averageMark += students[i][1];
    var averagemark = (averageMark/students.length);
}

console.log((averageMark)/students.length);

if (averagemark<60){
    console.log("Grade F");
}

else if (averagemark<70){
    console.log("Grade D")
}

else if (averagemark<80){
    console.log("Grade C")
}

else if (averagemark<90){
    console.log("Grade B")
}

else if (averagemark<100){
    console.log("Grade A")
}

// Corection

for (var i = 0; i<=15; i++){
    if (i == 0){
        console.log("i is even"+ i)
    }
    else if(i%2 == 0){
        console.log("i is even" + i)
    }
    else{
        console.log(i + "is odd")
    }
}



function findIndex(array, item){
    for (let k = 0; k<array.length;  k++){
        if(array[k] === item){
            return k;
        }
        else {
            return -1;
        }
    }
    
}
const vehicles =["Mercedes", "Toyota", "Camry", "Hilux"]
console.log(findIndex(vehicles, "Mercedes"));
console.log(findIndex(vehicles, "Benz"));
console.log(findIndex(vehicles, "Camry"));
console.log(findIndex(vehicles, "Okada"));

//Correction
// For FilteredEvenNumbersArray

function filteredEvenNumbers(array){
    const even_numbers = [];

    for (let i =0; i<array.length; i++){
        if (array[i] % 2 === 0){
            even_numbers.push(array[i]);
        }
    }
    console.log(even_numbers);
    return even_numbers;
}

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const even_numbers = filteredEvenNumbers(numbers)


function findMax(array){
    if (array.length === 0){
        return null;
    }

    let maximumValue = array[0];

    for (let i = 0; i<array.length; i++){
        if (array[i] > maximumValue){
            maximumValue = array[i];
        }
    }
    console.log(maximumValue);
    return maximumValue;
}

const numbers_1 = [-1,-2,-3,0];
const maxNumbers = findMax(numbers_1);
 
let text_3 = "";

for (let i = 0; i <= 10; i++) {
  if (i === 6) { 
    break; }
  text_3 += i;
}
console.log(text_3);

// Using a continue statement
let text_4 = "";

for (let i = 0; i <= 10; i++) {
  if (i === 6) { 
    continue; }
  text_4 += i;
}
console.log(text_4);

const grid = [
    [1,2],
    [4,10],
    [7,8],
]

let foundZero = false;

for (let row = 0; row<grid.length; row++){
    for(let col = 0; col<grid[row].length; col++){
        if (grid[row][col] === 0){
            foundZero = true;
            break; // Breaking the inner loop
        }
    }
    if(foundZero){
        break; // exit the outer loop
    }
}

if (foundZero){
    console.log("Found zero in the grid");
}

else {
    console.log("zero is not found in the grid")
}

let y = 5;
console.log(y == 6);
console.log(y===5);
console.log(y== "5")
console.log(y === 5)

var Boolean_numbers = 3>4;
console.log(Boolean_numbers)

function containsLetterA(inputString){
    return inputString.includes('a') || inputString.includes('A')
}

const testString1 = "Hello World";
const testString2 = "Banana";
const testString3 = "Apple"
console.log(containsLetterA(testString1));
console.log(containsLetterA(testString2));
console.log(containsLetterA(testString3));

const age = 25;

const status_1 = age >= 18 ? "Adult" : "Minor";
console.log(status_1);

let name_1 = null;
let text_0 =  "missing";
let result_0 = name_1 ?? text_0;

console.log("the name is " + result_0);

function test_logical_Nor(a,b){
    return(!a && !b)
}

console.log(test_logical_Nor(true, false));
console.log(test_logical_Nor(false, false));
console.log(test_logical_Nor(true, true));
console.log(test_logical_Nor(false, true));


const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

  console.log(fruits.get("apples"))
  console.log(fruits.get("bananas"))

  console.log(fruits.size)
// Create a Map
const fruits_01 = new Map();

// Set Map Values
fruits_01.set("apples", 500);
fruits_01.set("bananas", 300);
fruits_01.set("oranges", 200);
fruits_01.set("Okro", 100);
fruits_01.set("tomatoes", 50)

console.log(fruits_01.get("tomatoes"))
console.log(fruits_01.size)

// create an empty map for all student grades
const studentGrades = new Map();

// Add student names and their test scores

studentGrades.set("Dolapo", [20, 10, 15]);
studentGrades.set("Fateemah", [2, 50, 11]);
studentGrades.set("Fareedah", [200, 100, 16]);
studentGrades.set("Vivian", [21, 13, 9]);
studentGrades.set("Moses", [800, 19, 28]);
studentGrades.set("John", [203, 103, 159]);


// function to calculate average score for each student

function calculateAverage(scores){
    const total = scores.reduce((acc,
        score) => acc + score / 3, 0);
        return total;
}

//function to log the average score for each student

studentGrades.forEach((scores, student) => {
    const average = calculateAverage(scores);
    console.log(`${student}'s average score: ${average}`);
})


const people = [
    {name: "Sam", age: 25},
    {name: "Tosin", age: 23},
    {name: "Dan", age: 20},
    {name: "Son", age: 39},
]

const ageGroupMap = new Map();

//categorize eacg age groups

function categorizeIntoEachAgeGroups(person) {
    if (person.age < 30){
        return "Age is under 30"
    }
    else{
        return "Age is over 30"
    }
}

//populate each age groups
people.forEach((person) => {
    const ageGroup = categorizeIntoEachAgeGroups(person);

    if (!ageGroupMap.has(ageGroup)){
        ageGroupMap.set(ageGroup, []);
    }


    ageGroupMap.get(ageGroup).push(person);
});


// Log in all age groups map in a console

ageGroupMap.forEach((person, ageGroup) => {
    console.log(`${ageGroup}:`);

    people.forEach((person) => {
        console.log(`${person.name}, ${person.age} years old`)
    })
})

function wordFrequencyMap(inputString){
    const wordMap = new Map()
const words = inputString.toLowerCase().match(/\b\w+\b/g);

if (words){
    for(const word of words){
        if(wordMap.has(word)){
            wordMap.set(word, wordMap.get(word) + 1);
        }

        else{
            wordMap.set(word, 1)
        }
    }
}
return wordMap;
}

const inputString = "DOLAPO is a Foodie";

const result_10  = wordFrequencyMap(inputString);
console.log(result_10)

const cache = new Map();

function cacheFunction(key, callback){
    if(cache.has(key)){
        return cache.get(key);
    }
    else {
        const result = callback();
        cache.set(key, result);
        return result;
    }
}

// log values inside the cache

function expensiveOperation(){
    console.log("expensive Operations");
    return Math.random();
}

const cachedResult1 = cacheFunction("uniqueKey1", expensiveOperation);
console.log(cachedResult1);

const cachedResult2 = cacheFunction("uniqueKey1", expensiveOperation);
console.log(cachedResult2);

const cachedResult3 = cacheFunction("uniqueKey2", expensiveOperation);
console.log(cachedResult3);

const cachedResult4 = cacheFunction("uniqueKey2", expensiveOperation);
console.log(cachedResult4);

const cachedResult5 = cacheFunction("uniqueKey2", expensiveOperation);
console.log(cachedResult5);

const cachedResult6 = cacheFunction("uniqueKey2", expensiveOperation);
console.log(cachedResult5);

//class work

//Write a javaScript code to calculate and print all the sum of 
// all the elements in myArray

const myArray = [2, 3, 4, 5, 6, 10 ,10000];

let sum = 0;

for (let i = 0; i < myArray.length; i++){
    sum += myArray[i];
}

console.log("the sum of the array:" + sum)

function dec2bin(dec){
    return (dec >>> 0).toString(2);
  }

  console.log(dec2bin(-10));
  console.log(dec2bin(-100));


  hello = function() {
    return "Hello World!";
  }

  console.log(hello);

  hello = () => {
    return "Hello World!";
  }
  console.log("Hello World!")

  let hello_1 = "";

  hello_1 = (val) => "Hello " + val;
  console.log(hello_1("Madam"));

  const passNumbers =(number) =>{
    return number * number;
  }

  const result_101 = passNumbers(100);
  console.log(result_101);

  const joinString = (str1, str2) => {
    return str1 + str2;
  }

  const result102 = joinString("Hello ", "World!")
  console.log(result102);



  const shortMessage = () => {
    console.log("This is a short message");
  }

  shortMessage();

  const generateRandomNumber = () => {
    return Math.random();
  }

  console.log(generateRandomNumber())

  class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
  
  const myCar1 = new Car("Ford", 2014);
  const myCar2 = new Car("Audi", 2019);

    console.log(myCar1.name)
    console.log(myCar1.year)
    console.log(myCar2.name)
    console.log(myCar2.year)

    class Car_0 {
        constructor(name, year) {
          this.name = name;
          this.year = year;
        }
        age() {
          const date = new Date();
          return date.getFullYear() - this.year;
        }
      }
      
      const myCar_20 = new Car_0("Toyota", 2014);
      console.log(myCar_20.name);
      console.log(myCar_20.year);

      class person_0{
        constructor(name, age, gender){
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        introduce(){
            console.log(`my name is ${this.name}, i am ${this.age} year's old, i am a ${this.gender}.`)
        }
      }

      const person_1 = new person_0("Dolapo", 25, "male");
      const person_2 = new person_0("Josh", 30, "female");
      const person_3= new person_0("Sir John", 40, "male");
      const person_4 = new person_0("Mr Stanley", 60, "male");
      const person_5 = new person_0("Miss Fareedah", 50, "Female")


      console.log(person_1.introduce());
      console.log(person_2.introduce());
      console.log(person_3.introduce());
      console.log(person_4.introduce());
      console.log(person_5.introduce());


      const objects = {name: 'Dolapo', sex: 'male', id: 1}
    //   return objects;
      console.log(delete objects.name); 
      console.log(delete objects.sex);
      console.log(objects.id);  
      
      let x = "";
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}

for (let i in myObj.cars) {
  x += myObj.cars[i].name
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j] + "<br>";
  }
  console.log(x);
}

class Person_30 {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.address = null; // Initialize address as null
    }
  
    setAddress(street, city, postalCode) {
      this.address = new Address(street, city, postalCode);
    }
  
    getFullInfo() {
      return `${this.name}, ${this.age} years old, ${this.gender}`;
    }
  }
  
  class Address {
    constructor(street, city, postalCode) {
      this.street = street;
      this.city = city;
      this.postalCode = postalCode;
    }
  
    getAddressInfo() {
      return `${this.street}, ${this.city} ${this.postalCode}`;
    }
  }
  
  // Create a person and set their address
  const person10 = new Person_30("Alice", 30, "Female");
  person10.setAddress("123 Main St", "Exampleville", "12345");
  
  // Access and display person's information and address
  console.log(person10.getFullInfo());
  console.log("Address: " + person10.address.getAddressInfo());

  //Getters and Setters

  class Car_00 {
    constructor(brand) {
      this.carname = brand;
    }
    get cnam() {
      return this.carname;
    }
    set cnam(x) {
      this.carname = x;
    }
  }
  
  const myCar = new Car_00("Ford");
  myCar.carname = "Benz";
  myCar.carname = "Volvo";
  console.log(myCar.cnam)