'use strict';

console.log('Задание 3');

if (age && age >= 17) {
    console.log(`Привет мне ${age} лет`);
} else {
    if (age <= 17) {
        console.log('Вам нет еще 18!');
    } else {
        console.log('Неверно указан возраст');
    }
}
