// problem 1st -- Sum of Array Elements: Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array.


function sumArray(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum  += arr[i];
    }
    return sum;
}

const Array = [1, 2, 3, 4, 5];

console.log(sumArray(Array));   

