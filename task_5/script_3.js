'use strict';

console.log('Задание 3 - Happy New Year');

for (let i = 1; i <= 19; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
     if ((i + j) % 2 === 0) {
      line += '★'
     } else {
      line += '_'
     }
    }
    console.log(line);
   }

