// problem 1st -- Sum of Array Elements: Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array.


function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const Array = [1, 2, 3, 4, 5];

console.log(sumArray(Array));

// problem 2nd -- Find the Largest Number: Write a function that takes an array of numbers as input and returns the largest number in the array.

function findLarge(arr) {
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 18, 90];

console.log(findLarge(arr));


// problem 3rd -- Reverse a String: Write a function that takes a string as input and returns the reverse of that string.


function reverseString(string){
    let reversed = "";
    for (let i = string.length - 1; i >= 0; i--) {        
        reversed += string[i];
    }
    return reversed;
}

const str = "Hello";
console.log(reverseString(str));

// problem 4th -- Count the Vowels: Write a function that takes a string as input and returns the count of vowels (a, e, i, o, u) in the string.

function countVowels(str){
    let count = 0;

    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            count++;
        }
    }
    return count;
}

console.log(countVowels("javascript"));


// problem 5th -- Find the Length of a String: Write a function that takes a string as input and returns the length of the string.


function findLength(str){
    let strCount = 0;
    for (let i = 0; i < str.length; i++) {
        strCount++;
    }
    return strCount;
}

console.log(findLength("javascript"));


// problem 6th -- Reverse an Array: Write a function that takes an array as input and returns a new array with the elements reversed.


function reverseArray(arr){
    let reverseArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {        
        reverseArray.push(arr[i]);
    }
    return reverseArray;
}

let checkArray = ['hey1', 'hey2', 'hey3'];
console.log(reverseArray(checkArray));



