'use strict';
console.log('Задание 1');

// Function Declaration
function avg (arr) {
    let sum = 0;
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        result = sum / arr.length;
    }
    return result.toFixed(2);
}

// Function Expression
let avg = function (arr) {
    let sum = 0;
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        result = sum / arr.length;
    }
    return result.toFixed(2);
};

//Arrow Function
let avg = (...arr) => {
    let sum = 0;
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        result = sum / arr.length;
    }
    return Math.floor(result);
};

console.log(avg(6, 10, 12));