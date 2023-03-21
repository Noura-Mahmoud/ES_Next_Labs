//#region  1) Swap the values of x and y using destructuring
let x = 5;
let y = 7;
[y,x] = [x,y];
console.log(x); // Output: 7
console.log(y); // Output: 5
//#endregion

//#region  Using rest parameter and spread operator return min and max value from any array passed to function call and display each of them separately after function call
var arr1 = [1,2,3,4,5,6];
function minAndMax(...arr)
{
    return [Math.min(...arr),Math.max(...arr)];
}
var minMax = minAndMax(1,2,3,4,5,6);
// var minMax = minAndMax(...arr1);
console.log(`Min: ${minMax[0]}`); // Output: Min: 1
console.log(`Max: ${minMax[1]}`); // Output: Max: 6
//#endregion

var fruits = ["apple", "strawberry", "banana", "orange", "mango"];
//#region 3-a) test that every element in the given array is a string
const result = fruits.every(word => typeof word === 'string');
console.log(result); // Output: true
// #endregion

// #region 3-b) test that some of array elements starts with "a"
const result1 = fruits.some(word => word[0] === 'a');
console.log(result1); // Output: true
//#endregion

//#region  3-c) generate new array filtered from the given array with only elements that starts with "b" or "s"
const filteredWords = fruits.filter(word => word[0] === 'b' || word[0] === 's');
console.log(filteredWords); // Output: Array [ "strawberry", "banana" ]
//#endregion

//#region 3-d) generate new array, each element of the new array contains a string declaring that you like the give fruit element
// ```using map```
// const likedFruits = fruits.map(fruit => `I like ${fruit}.`);
// ```without using map```
let likedFruits = [];
for (let i = 0; i < fruits.length; i++) {
    likedFruits.push(`I like ${fruits[i]}.`);
  }
  
// console.log(likedFruits); 
//#endregion

//#region 3-e) use forEach to display all elements of the new array from previouse point
likedFruits.forEach(element => {
    console.log(element)
});
//#endregion