// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
numbers.indexOf(101)

// - Find the last index of `9` in numbers
numbers.indexOf(9,8);

// - Convert value of strings array into a sentance like "This is a collection of words"
strings.join(" ")
// - Add two new words in the strings array "called" and "sentance"
strings.push("called","sentance")
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
strings.join(" ")
// - Remove the first word in the array (strings)
strings.shift();
// - Find all the words that contain 'is' use string method 'includes'
let allIs=strings.filter((string)=>
strings.includes("is")
);

// - Find all the words that contain 'is' use string method 'indexOf'
let allIsAgain=strings.filter((string)=>
strings.indexof("is")!== -1
);

// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every((num)=>num % 3==0);
// -  Sort Array from smallest to largest
numbers.sort((a,b)=>a-b);
// - Remove the last word in strings
strings.pop();
// - Find largest number in numbers
let largest=
numbers.sort((a,b)=>a-b).pop();

// - Find longest string in strings
let largestStrings=strings.sort((a,b)=>a.length-b.length).pop();
// - Find all the even numbers
let even=numbers.filter((num)=>num%2===0);

// - Find all the odd numbers
let odd=numbers.filter((num)=>num%2!==0);

// - Place a new word at the start of the array use (unshift)
strings.unshift("new word")
// - Make a subset of numbers array [18,9,7,11]
numbers.slice(3,6);
// - Make a subset of strings array ['a','collection']
strings.slice(1,3);
// - Replace 12 & 18 with 1221 and 1881
// numbers.splice(1,1,1221);
numbers.map((num)=>{
  if(num==12){
    return 1221;
  }else if(num==18){
    return 1881
  }else {
    return num;
  }
})
// - Replace words in strings array with the length of the word
let stringsLength=console.log(strings.map((strings)=>strings.length));
// - Find the sum of the length of words using above question
stringsLength.reduce((acc,cv)=>{
  acc=acc+cv;
  return acc;
},0)
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
let filterCustomer=customers.filter((customers)=>customers.firstname.startsWith("J"));
// - Create new array with only first name
let firstNameCustomer=customers.map((customers)=>customers.firstname)
// - Create new array with all the full names (ex: "Joe Blogs")
let fullNameCustomer=customers.map((customers)=>`${customers.firstname} ${customers.lastname}`)
// - Sort the array created above alphabetically
fullNameCustomer.sort();
// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowelCustomer=customers.filter((customers)=>{
  if(
    customers.firstname.toLowerCase().includes("a") ||
    customers.firstname.toLowerCase().includes("i") ||
    customers.firstname.toLowerCase().includes("o") ||
    customers.firstname.toLowerCase().includes("u") ||
    customers.firstname.toLowerCase().includes("e") 
  ){
    return true;
  }else{
    return false;
  }
});