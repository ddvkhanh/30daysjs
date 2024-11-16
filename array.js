 //Exercise 1:

 //1. Declare an empty array;
let emptyArray = [];
console.log('empty array: '+ emptyArray);

//2. Declare an array with more than 5 number of elements
let newArray = [1,2,3,4,5];
console.log('array: '+ newArray);

//3. Find the length of your array
console.log('array length: '+ newArray.length);

//4. Get the first item, the middle item and the last item of the array
console.log('array first item: '+ newArray[0]);
console.log('array middle item' + newArray[Math.floor(newArray.length/2)])
console.log('array last item: '+ newArray[newArray.length -1]);

//5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes=[1,2,'Apple',3.0,'Orange'];
console.log('mixedDataTypes length: ' + mixedDataTypes.length);

//6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//7. Print the array using console.log()
console.log('itCompanies: ' + itCompanies);

//8. Print the number of companies in the array
console.log('itCompanies number: ' + itCompanies.length);

//9. Print the first company, middle and last company
console.log('itCompanies first: ' + itCompanies[0]);
console.log('itCompanies last: ' + itCompanies[itCompanies.length-1]);
console.log('itCompanies middle: ' + itCompanies[Math.floor(itCompanies.length/2)]);

//10. Print out each company
for (company of itCompanies) { console.log(company)};

//11. Change each company name to uppercase one by one and print them out
for (company of itCompanies) {console.log(company.toUpperCase())}

//12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log('itCompanies as string: '+ itCompanies.toString());

//13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let findCompany = 'Google';
if (itCompanies.includes(findCompany)) {
  console.log("Yes: itCompanies has " + findCompany);
} else {
  console.log("Company not found");
}

//14. Filter out companies which have more than one 'o' without the filter method
function findMoreThanOneO(company){
  console.log(company);
  let count = 0;
  for (i in company){
    if (company[i].toLowerCase()==="o") {
      count++;
    }
  }
  if (count>1) {
    return true;
  } else {
    return false;
  }
}

let moreThanOneO = itCompanies.filter(comp => (findMoreThanOneO(comp)));
console.log(moreThanOneO);

//15. Sort the array using sort() method
console.log("itCompanies sort "+itCompanies.sort());

//16. Reverse the array using reverse() method
console.log("itCompanies reverse "+itCompanies.reverse());

//17. Slice out the first 3 companies from the array
let array17 = itCompanies.slice();
array17.splice(0,3);
console.log("itCompanies remove first 3 " + array17);

//18. Slice out the last 3 companies from the array
let array18 = itCompanies.slice();
array18.splice(array18.length-3,3);
console.log("itCompanies remove last 3 "+ array18);

//19.Slice out the middle IT company or companies from the array
//same with 21


//20. Remove the first IT company from the array
let array20= itCompanies.slice();
array20.shift();
console.log("itCompanies remove first "+ array20);


//21. Remove the middle IT company or companies from the array
//return 1 element if array length is odd, 2 elements if array length is even
function findMiddleElement(array){
  let middleElement=[];
  if (array.length%2===0) {
    middleElement.push(array[array.length/2-1]);
    middleElement.push(array[array.length/2]);
  } else {
    middleElement.push(array[Math.floor(array.length/2)]);
  }
  return middleElement;
}

function removeMiddleElement(array){
  toRemove = findMiddleElement(array);
  return array.filter(item => !toRemove.includes(item));
}

array21 = itCompanies.slice();
console.log("Remove middle IT company/ companies:" + removeMiddleElement(array21));


//22. Remove the last IT company from the array
let array22 = itCompanies.slice();
array22.pop();
console.log("itCompanies remove last "+array22);


//23. Remove all IT companies
let array23 = itCompanies.slice();
array23.length=0;
console.log("Remove all IT companies: " + array23);


