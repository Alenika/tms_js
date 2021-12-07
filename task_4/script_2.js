'use strict';

console.log('');
console.log('Задание 2');

let age = Number(prompt('Введите свой возраст: '));
console.log(age);

if (age) {
    console.log(`Привет мне ${age} лет`);
} else {
    console.log('Неверно указан возраст');
}

age ? console.log(`Привет мне ${age} лет`) : console.log('Неверно указан возраст');

console.log('');
