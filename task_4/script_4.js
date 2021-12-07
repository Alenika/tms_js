'use strict';

console.log('');
console.log('Задание 4');

let actualColor = prompt('Выберите цвет: ');
let num_of_tries = +(prompt('Введите количество попыток? '));
let attemptNumber = 0;

for (let i = 0; i <= num_of_tries; i++) {
    let color = prompt('Какой цвет выбран? ');

    if (color !== actualColor) {
        alert('Вы не угадали');
        
        if (num_of_tries > attemptNumber) {
            attemptNumber++;
        } else {
            alert('Попытки закончились, вы не угадали');
            console.log('Игра закончена');
        }
    } else {
        alert('Вы угадали');
        console.log('Введенное значение цвета: ' + color);
        break;
    }
}

