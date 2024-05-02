/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = [];  

console.log('Exercise 1 result:', foods);


/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/

foods.push(`pizza`, `cheeseburger`)

console.log('Exercise 2 result:', foods);


/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/

foods.unshift(`taco`)

console.log('Exercise 3 result:', foods);


/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/

const favFood = foods[1]

console.log('Exercise 4 result:', favFood);



/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/
foods.splice(2, 0, `tofu`)


console.log('Exercise 5 result:', foods);


/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/

foods.splice(1, 1, `sushi`, `cupcake`)

console.log('Exercise 6 result:', foods)



/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/

const yummy = foods.slice(1, 3)

console.log('Exercise 7 result:', yummy);


/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/

const soyIdx = foods.indexOf(`tofu`)

console.log('Exercise 8 result:', soyIdx);


/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/

const allFoods = foods.join(`->`)

console.log('Exercise 9 result:', allFoods);


/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/

const hasSoup = foods.includes(`soup`)

console.log('Exercise 10 result:', hasSoup);



const inventors = [
   { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
   { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
   { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
   { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
   { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
   { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
   { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
   { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
   { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
   { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
   { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
   { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
 ];
 
 const people = [
   'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
   'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
   'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
   'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
   'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
   'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
   'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
   'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
   'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
   'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony',
   'Blake, William'
 ];

 const travelMethods = [
   'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
   'bike', 'walk', 'car', 'van', 'car', 'truck'
 ];

 const devs = [
   { name: 'Alex', year: 1988 },
   { name: 'Dani', year: 1986 },
   { name: 'Matt', year: 1970 },
   { name: 'Wes', year: 2015 }
 ];

 const comments = [
   { text: 'Love this!', id: 523423 },
   { text: 'Super good', id: 823423 },
   { text: 'You are the best', id: 2039842 },
   { text: 'Ramen is my fav food ever', id: 123523 },
   { text: 'Nice Nice Nice!', id: 542328 }
 ];

 // Array.prototype.filter()

// 1. Filter the array of inventors into a new array containing only the inventors born in the 1500's.

// - You have an array of inventors, each with a birth year listed by the property 'year'.
// - Use the Array.prototype.filter() method to create a new array.
// - The new array, 'veryOldInventors', should only include inventors born between the years 1500 and 1599.

let veryOldInventors = [inventors.filter((inventor) => { return inventor.year >= 1500 && inventor.year < 1600})]

// Enter your solution code here:



// Check your return value:
console.log('Exercise 1 My Result: ', veryOldInventors)
console.log('Exercise 1 Correct Result: ',
    [
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }
    ]
)

// Array.prototype.map()

// 2. Map the array of inventors into a new array. This new array should only contain objects with the inventors' first and last names.

// - For each inventor, return an object in the format { first: "First Name", last: "Last Name" }.
// - The new array should be a collection of these objects, each representing an inventor with only their first and last names.

// Hint:  Return a new object literal from the callback that looks something like { first: "First Name", last: "Last Name" }


let inventorNames = [inventors.map((inventor) => {return { first: inventor.first, last: inventor.last }})]

// Enter your solution code here:



// Check your return value:
console.log('Exercise 2 My Result: ', inventorNames)
console.log('Exercise 2 Correct Result: ',
    [
        { first: 'Albert', last: 'Einstein' },
        { first: 'Isaac', last: 'Newton' },
        { first: 'Galileo', last: 'Galilei' },
        { first: 'Marie', last: 'Curie' },
        { first: 'Johannes', last: 'Kepler' },
        { first: 'Nicolaus', last: 'Copernicus' },
        { first: 'Max', last: 'Planck' },
        { first: 'Katherine', last: 'Blodgett' },
        { first: 'Ada', last: 'Lovelace' },
        { first: 'Sarah E.', last: 'Goode' },
        { first: 'Lise', last: 'Meitner' },
        { first: 'Hanna', last: 'Hammarström' }
    ]
)

// Array.prototype.sort()

// 3. Sort the inventors by birth date in ascending order (from those born furthest in the past to those born most recently).

let sortedByBirthYear = [inventors.sort((a, b) => {return inventors.year})]

// Enter your solution code here:



// Check your return value:
console.log('Exercise 3 My Result: ', sortedByBirthYear)
console.log('Exercise 3 Correct Result: ',
    [
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 }
    ]
)

// Array.prototype.find()

// 4. Use Array.prototype.find() to identify the inventor with the first name 'Ada' from an array of inventor objects

// - You have an array of objects, each representing an inventor with various properties including their first name.
// -  Utilize the Array.prototype.find() method to locate the object for the inventor named 'Ada'.
// -  Assign the found inventor object to the variable 'inventorNamedAda'

let inventorNamedAda = inventors.find(( first ) => first === `Ada`)

// Enter you solution code here:

 

// Check your return value:
console.log('Exercise 4 My Result: ', inventorNamedAda)
console.log('Exercise 4 Correct Result: ', { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 })

// Array.prototype.map()

// 5. Use the Array.prototype.map() method to reformat each name in the 'people' array. 
// The goal is to convert names from "Last, First" format to "First Last" format.

// Hint: Use the String.prototype.split method to separate the first and last names. You can split the string using ', ' as the separator.
// After splitting the names, rearrange them to the "First Last" format.

let firstLast = [people.map((person) => )]

// Enter your solution code here:



// Check your return value:
console.log('Exercise 5 My Result: ', firstLast)
console.log('Exercise 5 Correct Result: ',
    [
        'Carl Becker',
        'Samuel Beckett',
        'Mick Beddoes',
        'Henry Beecher',
        'Ludwig Beethoven',
        'Menachem Begin',
        'Hilaire Belloc',
        'Saul Bellow',
        'Robert Benchley',
        'Peter Benenson',
        'David Ben-Gurion',
        'Walter Benjamin',
        'Tony Benn',
        'Chester Bennington',
        'Leana Benson',
        'Silas Bent',
        'Lloyd Bentsen',
        'Ric Berger',
        'Ingmar Bergman',
        'Luciano Berio',
        'Milton Berle',
        'Irving Berlin',
        'Eric Berne',
        'Sandra Bernhard',
        'Yogi Berra',
        'Halle Berry',
        'Wendell Berry',
        'Erin Bethea',
        'Aneurin Bevan',
        'Ken Bevel',
        'Joseph Biden',
        'Ambrose Bierce',
        'Steve Biko',
        'Josh Billings',
        'Frank Biondo',
        'Augustine Birrell',
        'Elk Black',
        'Robert Blair',
        'Tony Blair',
        'William Blake'
    ]
)
