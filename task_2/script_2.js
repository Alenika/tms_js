'use strict';

if (user.isDriver) {
    console.log(`Привет! Меня зовут ${user.name} ${user.surname}. Мне ${user.age} лет. Я живу в городе ${user.city}. Я вожу машину`);
} else {
    console.log(`Привет! Меня зовут ${user.name} ${user.surname}. Мне ${user.age} лет. Я живу в городе ${user.city} и я НЕ вожу машину.`);
}