console.log('Here is : ', 'Reduce & Filter') 

//Using Reduce 1 -5
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];



/*
1
Using the varabile persons
Create a function called avgAge
that accept an array
and return average age of this array

Ex: avgAge(persons) => 41.2
*/
function avgAge(persons) {
const totAge = persons.reduce((sum,persons ) => sum + persons.age ,0);
       let AvgAge = totAge/persons.length;  
       return AvgAge;
    }

  console.log(avgAge(persons)); 

/*
2
Using the varabile persons
Create a function called longestName
that accept an array
and return the longerst full name

Ex: longestName(persons) => 'Soso Al-Amora'
*/
function fullNameLength(person) {
    return person.name.first.length + person.name.last.length;
  }
  
  function longestName(array) {
    const longestPerson = array.reduce((longest, current) =>
      fullNameLength(current) > fullNameLength(longest) ? current : longest
    );
  
    return `${longestPerson.name.first} ${longestPerson.name.last}`;
  }
  
  const longestFullName = longestName(persons);
  console.log(longestFullName); // Output: "Soso Al-Amora"
  

/*
3
Create a function called maxNumber
that accept an array
and return max number

Ex: maxNumber([1,2,4,9]) => 9
*/
const n =[1,,12,2,4,9,6]
function maxNumber(array) {
    return array.reduce((first,second)=> 
    first > second ? first:second );  
}
console.log (maxNumber(n))



/*
4
Create a function called repeatChar
that accept a string and char
and return number times that this char repeat inside the string

Ex: repeatChar("hello world",w) => 1
*/

function repeatChar(string, ch) {
  return [...string].reduce((sum, c) => c === ch ? sum + 1 : sum, 0);
}

console.log(repeatChar("hello world","w"))



/*
5
Create a function called usAndNumberBeetweenUs
that accept two numbers
and return array of these two numbers and the numbers between them

Ex: usAndNumberBeetweenUs(2,5) => [2,3,4,5]
*/

function usAndNumberBeetweenUs(start, end) {
  if (start > end) {
    [start, end] = [end, start];
  }

  const numbersBetween = Array.from({ length: end - start + 1 }, (_, index) => start + index);
  return numbersBetween.reduce((result, num) => {
    result.push(num);
    return result;
  }, []);
}

console.log(usAndNumberBeetweenUs(2, 5)); 
console.log(usAndNumberBeetweenUs(5, 2)); 
console.log(usAndNumberBeetweenUs(-3, 1));





//Filter 6 - 11
/*
6
Create a function called evenOnly
that accept an array
and return an array of even number only

Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/
function evenOnly(arr) {
  return arr.filter((num) => num % 2 === 0);
}
console.log(evenOnly([1,8,6,4]))

/*
7
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4

Ex: multiFour([1,8,6,4]) => [8,4]
*/
function multiFour(arr){
  return arr.filter((num)=>num%4 ===0)
}
console.log(multiFour([1,8,6,4]))

/*
8
**this question not that easy mybe you will need to use two function inside each other

Create a function called containChar
that accept an array of string
and return an array of these string that contain this char

Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/
function containChar(arr, chr) {
  return arr.filter((str) => str.includes(chr));
}
console.log(containChar(["hello","world"],"w"))
console.log(containChar(["hello","world"],"l"))
/*
9
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/
function evenIndexOddLength(strings) {
  return strings.filter((str, index) => index % 2 === 0 && str.length % 2 !== 0);
}

var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
console.log(evenIndexOddLength(strings)); 

/*
10
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number

Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/
const persons2 = [
  { name: { first: 'John', last: 'Doe' }, age: 45 },
  { name: { first: 'Jane', last: 'Smith' }, age: 32 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 },
];

function olderThan(personsArray, minAge) {
  return personsArray.filter((person) => person.age > minAge);
}

console.log(olderThan(persons2, 56));
/*
11
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/
function shorterThan(strings, maxLength) {
  return strings.filter((str) => str.length < maxLength);
}

const strings2 = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
console.log(shorterThan(strings2, 5)); 

// if you finish the exercises review the material of the week and help your classmate