"use strict";

console.log("Задание 4");

console.everyUser = function (users, prefix) {
    for (let i = 0; i < users.length; i++) {
        let user_name = prefix + users[i].name;
        console.log(user_name);
    }
};

const userpetya = {
  name: "petya",
  transactions: [123, 123213213, -5, -8],
  sum: 10,
};

const uservasya = {
  name: "vasya",
  transactions: [10, 20, -5, -8],
  sum: 10,
};

console.everyUser([userpetya, uservasya], "Имя пользователя: "); // Массив пользователей [userpetya, uservasya], префикс 'Имя пользователя: ')
// Имя пользователя: petya
// Имя пользователя: vasya
