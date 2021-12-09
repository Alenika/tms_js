"use strict";

console.log("Задание 4 - Угадай цвет");

let actualColor = prompt("Выберите цвет: ");
let num_of_tries = +prompt("Введите количество попыток? ");
let attemptNumber = 1;

for (let i = 0; i < num_of_tries; i++) {
  let color = prompt("Какой цвет выбран? ");

  if (color !== actualColor) {
    if (attemptNumber < num_of_tries) {
      attemptNumber++;
      alert("Вы не угадали.");
    } else {
      alert("Попытки закончились, вы не угадали");
      console.log("Игра закончена");
    }
  } else {
    alert("Вы угадали");
    console.log("Введенное значение цвета: " + color);
    break;
  }
}
