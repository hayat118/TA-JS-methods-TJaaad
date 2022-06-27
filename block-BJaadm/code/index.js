let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array
let peopelName=persons.map(persons=>persons.name);
// Create an array peopleGrade and store the value of grade key from persons array
let peopelGrade=persons.map(persons=>persons.grade);

// Create an array peopleSex and store the value of sex key from persons array
let peopelSex=persons.map(persons=>persons.sex);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'
let filteredName=persons.filter((persons)=>{
  if(
    persons.name.startsWith("J")||
    persons.name.startsWith("P")
  ){
    return true;
  }
})
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
console.log(peopelName.filter((name)=>
    name.startsWith("A")||name.startsWith("C")
).length
)
// Log all the filtered male ('M') in persons array
console.log(persons.filter((persons)=>persons.sex=="M"));
// Log all the filtered female ('F') in persons array
console.log(persons.filter((persons)=>persons.sex=="F"));

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
console.log(persons
  .filter((persons)=>persons.sex=="F")
  .filter((persons)=>
  persons.name.startsWith("c")||
  persons.name.startsWith("j")
  )
  );

// Log all the even numbers from peopleGrade array
let even=persons.grade.filter((grade)=>{
  if(persons.grade%2==0){
    return true;
  }
});
// Find the first name that starts with 'J' in persons array and log the object
persons.find((persons)=>persons.name.startsWith("J"));
// Find the first name that starts with 'P' in persons array and log the object
persons.find((persons)=>persons.name.startsWith("P"));
// Find the first name that starts with 'J', grade is greater than 10 and is a female
persons.find((persons)=>persons.name.startsWith("J") && persons.grade>10 && persons.sex=="F");

// Filter all the female from persons array and store in femalePersons array
let femalePersons=persons.filter((persons)=>persons.sex=="F");
// Filter all the male from persons array and store in malePersons array
let femalePersons=persons.filter((persons)=>persons.sex=="M");

// Find the sum of all grades and store in gradeTotal
let gradeTotal=peopelGrade.reduce((acc,cv)=>acc+cv,0)
// Find the average grade
// let gradeTotal=peopelGrade.reduce((acc,cv)=>acc+cv,0)/peopelGrade.length;
gradeTotal/peopelGrade.length;
// Find the average grade of male
let maleGrade=persons.filter((p)=>p.sex=="M");
maleGrade.reduce((acc,cv)=>{
  return acc+cv.grade;
},0)/maleGrade.length
// Find the average grade of female
let maleGrade=persons.filter((p)=>p.sex=="F");
maleGrade.reduce((acc,cv)=>{
  return acc+cv.grade;
},0)/maleGrade.length
// Find the highest grade
peopelGrade.sort((a,b)=>a-b).pop();
// Find the highest grade in male
maleGrade.sort((a,b)=>a-b).pop();
// Find the highest grade in female
feMaleGrade.sort((a,b)=>a-b).pop();

// Find the highest grade for people whose name starts with 'J' or 'P'
let nameWithJOrP=persons.filter((persons)=>
persons.name.startsWith('J')||
persons.name.startsWith('P')||
);
let gradeWithNameJOrP=nameWithJOrP.map((persons)=>persons.grade);
gradeWithNameJOrP.sort((a,b)=>a-b).pop();
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
peopelGrade.sort((a,b)=>a-b);
// Sort the peopleGrade in descending order
peopelGrade.sort((a,b)=>b-a);

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

// Sort the array peopelName in ascending `ABCD..Za....z`

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
