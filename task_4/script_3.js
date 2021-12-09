"use strict";

console.log("Задание 3");

if (age >= 17) {
  console.log(`Привет! Мне ${age} лет.`);
} else {
  if (age > 0 && age <= 17) {
    console.log("Вам нет еще 18!");
  } else {
    console.log("Неверно указан возраст.");
  }
}

switch (!isNaN(age)) {
  case age <= 0:
    console.log("Неверно указан возраст");
    break;
  case age > 0 && age < 18:
    console.log("Вам нет еще 18!");
    break;
  case age > 18:
    console.log(`Привет, мне ${age} лет.`);
    break;
  default:
    console.log("Неверно указан возраст.");
}
