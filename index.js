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


