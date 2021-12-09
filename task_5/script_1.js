'use strict';
console.log('Задание 1');

const arr = [1, 2, -8, 4, 7, 10, 24, -5, 90, 80, 91]
let sumPositive = 0;

for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0 && arr[i] > 0) {
        sumPositive += arr[i]
    }
}
console.log('Сумма всех положительных четных элементов = ' + sumPositive);