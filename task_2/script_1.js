'use strict';

alert('Создать объект с личной информацией');
let user = {
    name: 'Елена',
    surname: 'Агиевич',
    age: 30,
    city: "Минск",
    isDriver: true
}
console.log(user);
console.log(`Привет! Меня зовут ${user.name} ${user.surname}. Мне ${user.age} лет. Я живу в городе ${user.city}.`);
