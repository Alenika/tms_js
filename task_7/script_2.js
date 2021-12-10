"use strict";
console.log("Задание 2");

const arr1 = [1, 2, 3, 4, 5, -10, 6, 90, 23, -8];
const arr2 = [1, -2, 50, 9, 8, 15, 2];
const arr3 = [1, 2, 3, 5, 19, 76, -67, 78];

function getNewArrFromGroup (arrays) {
    let newArrFromGroup = [];

    for (const arr of arrays) {
        newArrFromGroup = newArrFromGroup.concat(arr);
    }

    newArrFromGroup = newArrFromGroup.filter(value => value < 0 && value % 2 === 0);

    newArrFromGroup.pop();
    newArrFromGroup.shift();
    
    return newArrFromGroup;  
}

console.log(getNewArrFromGroup([arr1, arr2, arr3]))
