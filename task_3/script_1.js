'use strict';

let user = {
    name: prompt('Введите Ваше имя: '),
    surname: prompt('Введите Вашу фамилию: '),
    age: +prompt('Сколько Вам лет: '),
    city: prompt('Введите Ваш город проживания'),
    isDriver: confirm('Есть ли у Вас водительские права?'),
};

console.log(user);

if (user.isDriver) {
    console.log(`Привет! Меня зовут ${user.name} ${user.surname}. Мне ${user.age} лет. Я живу в городе ${user.city}. Я вожу машину`);
} else {
    console.log(`Привет! Меня зовут ${user.name} ${user.surname}. Мне ${user.age} лет. Я живу в городе ${user.city} и я НЕ вожу машину.`);
}
